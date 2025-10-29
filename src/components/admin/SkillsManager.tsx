import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Pencil, Trash2, Plus } from "lucide-react";

type Skill = {
  id: string;
  name: string;
  category: string;
  proficiency: number;
  display_order: number;
};

export function SkillsManager() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const { data, error } = await supabase
      .from("skills")
      .select("*")
      .order("category")
      .order("display_order");

    if (error) {
      toast.error("Failed to fetch skills");
    } else {
      setSkills(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const skillData = {
      name: formData.get("name") as string,
      category: formData.get("category") as string,
      proficiency: parseInt(formData.get("proficiency") as string) || 0,
      display_order: parseInt(formData.get("display_order") as string) || 0,
    };

    if (editingSkill) {
      const { error } = await supabase
        .from("skills")
        .update(skillData)
        .eq("id", editingSkill.id);

      if (error) {
        toast.error("Failed to update skill");
      } else {
        toast.success("Skill updated");
        fetchSkills();
      }
    } else {
      const { error } = await supabase
        .from("skills")
        .insert(skillData);

      if (error) {
        toast.error("Failed to create skill");
      } else {
        toast.success("Skill created");
        fetchSkills();
      }
    }

    setIsDialogOpen(false);
    setEditingSkill(null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this skill?")) return;

    const { error } = await supabase
      .from("skills")
      .delete()
      .eq("id", id);

    if (error) {
      toast.error("Failed to delete skill");
    } else {
      toast.success("Skill deleted");
      fetchSkills();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Manage Skills</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingSkill(null)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Skill
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingSkill ? "Edit" : "Add"} Skill</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" defaultValue={editingSkill?.name} required />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Input id="category" name="category" defaultValue={editingSkill?.category} required />
              </div>
              <div>
                <Label htmlFor="proficiency">Proficiency (0-100)</Label>
                <Input
                  id="proficiency"
                  name="proficiency"
                  type="number"
                  min="0"
                  max="100"
                  defaultValue={editingSkill?.proficiency || 0}
                  required
                />
              </div>
              <div>
                <Label htmlFor="display_order">Display Order</Label>
                <Input
                  id="display_order"
                  name="display_order"
                  type="number"
                  defaultValue={editingSkill?.display_order || 0}
                />
              </div>
              <Button type="submit">Save</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {skills.map((skill) => (
          <Card key={skill.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg">{skill.name}</CardTitle>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setEditingSkill(skill);
                    setIsDialogOpen(true);
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(skill.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Category: {skill.category} | Proficiency: {skill.proficiency}%
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
