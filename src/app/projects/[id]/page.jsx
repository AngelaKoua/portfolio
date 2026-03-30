import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { projectsData } from "../../constants/projects";
import Link from "next/link";
import { CodeBracketIcon, ArrowLeftIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export async function generateMetadata({ params }) {
  const project = projectsData.find((p) => p.id.toString() === params.id);
  return {
    title: project ? `${project.title} | Portfolio` : "Project Not Found",
    description: project ? project.description : "Project details",
  };
}

const ProjectDetailPage = ({ params }) => {
  const project = projectsData.find((p) => p.id.toString() === params.id);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col bg-[#121212] items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link href="/" className="text-blue-500 hover:underline">
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-28 mx-auto px-6 py-4 flex-grow">
        <Link
          href="/#projects"
          className="flex items-center text-[#ADB7BE] hover:text-white mb-8 transition-colors duration-200 group w-fit"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Project Image Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#33353F] bg-[#181818]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Project Details Section */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {project.title}
            </h1>
            
            <p className="text-[#ADB7BE] text-lg leading-relaxed mb-8">
              {project.details || project.description}
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-[#181818] border border-[#33353F] text-sm text-[#ADB7BE] hover:border-purple-500 hover:text-white transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-auto">
              {project.gitUrl && project.gitUrl !== "/" && (
                <a
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-8 py-4 rounded-full bg-transparent border-2 border-purple-500 text-white font-medium hover:bg-purple-500/10 transition-all duration-300 group"
                >
                  <CodeBracketIcon className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform" />
                  View Code
                </a>
              )}
              {/* Note: In a real app, you might have a different URL for live demo. 
                  Currently using previewUrl if it were external, but here we link to dynamic page itself.
                  Let's assume there's an external liveUrl if provided, else hide it. */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProjectDetailPage;
