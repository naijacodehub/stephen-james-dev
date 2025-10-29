import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Pencil, Trash2, Plus } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  github_url: string | null;
  live_url: string | null;
  tags: string[];
  is_featured: boolean;
  display_order: number;
};

export function ProjectsManager() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("display_order");

    if (error) {
      toast.error("Failed to fetch projects");
    } else {
      setProjects(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const projectData = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      image_url: formData.get("image_url") as string || null,
      github_url: formData.get("github_url") as string || null,
      live_url: formData.get("live_url") as string || null,
      tags: (formData.get("tags") as string).split(",").map(t => t.trim()),
      is_featured: formData.get("is_featured") === "on",
      display_order: parseInt(formData.get("display_order") as string) || 0,
    };

    if (editingProject) {
      const { error } = await supabase
        .from("projects")
        .update(projectData)
        .eq("id", editingProject.id);

      if (error) {
        toast.error("Failed to update project");
      } else {
        toast.success("Project updated");
        fetchProjects();
      }
    } else {
      const { error } = await supabase
        .from("projects")
        .insert(projectData);

      if (error) {
        toast.error("Failed to create project");
      } else {
        toast.success("Project created");
        fetchProjects();
      }
    }

    setIsDialogOpen(false);
    setEditingProject(null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    if (error) {
      toast.error("Failed to delete project");
    } else {
      toast.success("Project deleted");
      fetchProjects();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Manage Projects</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingProject(null)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingProject ? "Edit" : "Add"} Project</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" defaultValue={editingProject?.title} required />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" defaultValue={editingProject?.description} required />
              </div>
              <div>
                <Label htmlFor="image_url">Image URL</Label>
                <Input id="image_url" name="image_url" defaultValue={editingProject?.image_url || ""} />
              </div>
              <div>
                <Label htmlFor="github_url">GitHub URL</Label>
                <Input id="github_url" name="github_url" defaultValue={editingProject?.github_url || ""} />
              </div>
              <div>
                <Label htmlFor="live_url">Live URL</Label>
                <Input id="live_url" name="live_url" defaultValue={editingProject?.live_url || ""} />
              </div>
              <div>
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input id="tags" name="tags" defaultValue={editingProject?.tags.join(", ")} />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="is_featured"
                  name="is_featured"
                  defaultChecked={editingProject?.is_featured}
                />
                <Label htmlFor="is_featured">Featured</Label>
              </div>
              <div>
                <Label htmlFor="display_order">Display Order</Label>
                <Input
                  id="display_order"
                  name="display_order"
                  type="number"
                  defaultValue={editingProject?.display_order || 0}
                />
              </div>
              <Button type="submit">Save</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setEditingProject(project);
                    setIsDialogOpen(true);
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(project.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
