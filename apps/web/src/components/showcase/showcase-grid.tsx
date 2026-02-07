"use client";

import { useState } from "react";
import ShowcaseFilters, { type Category } from "./showcase-filters";
import ShowcaseCard from "./showcase-card";
import ShowcaseDetail from "./showcase-detail";
import {
  getAllProjects,
  getProjectsByCategory,
  type ShowcaseProject,
} from "@/lib/showcase";

export default function ShowcaseGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(
    null
  );

  const allProjects = getAllProjects();
  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : getProjectsByCategory(activeCategory);

  const handleProjectClick = (project: ShowcaseProject) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-12">
      <ShowcaseFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="max-w-6xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ShowcaseCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      {selectedProject && (
        <ShowcaseDetail project={selectedProject} onClose={handleCloseDetail} />
      )}
    </section>
  );
}
