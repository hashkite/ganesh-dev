import { useParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const projectDetails = {
  id: 1,
  title: "E-commerce Platform",
  description:
    "A fully-featured e-commerce platform built with Drupal Commerce, featuring custom product types, payment integrations, and a headless React frontend for a seamless shopping experience.",
  image: "https://placehold.co/800x400/png",
  tags: ["Drupal 9", "Commerce", "React", "API"],
  features: [
    "Custom Product Types",
    "Secure Payment Integrations",
    "Headless Architecture with React",
    "Cart & Checkout Flow",
    "Advanced Order & User Management",
    "Multi-Currency & Tax Support",
    "Performance Optimization",
  ],
  techStack: {
    Backend: "Drupal 9 + Drupal Commerce",
    Frontend: "React.js + Next.js",
    Database: "MySQL / MariaDB",
    APIs: "JSON:API / GraphQL",
    "Payment Gateways": "Stripe, PayPal, Authorize.net",
    Caching: "Redis, Varnish",
    Hosting: "AWS / DigitalOcean",
  },
  challenges: [
    {
      title: "Handling Complex Product Variations",
      solution:
        "Used Drupal Commerce’s flexible product variation system to allow multiple SKUs per product (e.g., different colors, sizes).",
    },
    {
      title: "Secure Payment Transactions",
      solution:
        "Implemented tokenized transactions and SSL encryption for handling payments securely.",
    },
    {
      title: "Optimizing Performance for High Traffic",
      solution:
        "Used Redis caching for frequently requested data and integrated lazy loading & image compression.",
    },
  ],
  links: {
    demo: "#",
    repo: "#",
  },
  status: "Live & Running",
  upcomingFeatures: [
    "AI-powered product recommendations",
    "Integration with WhatsApp for order notifications",
    "More payment options (Apple Pay, Google Pay)",
  ],
};

export default function ProjectDetailPage() {
  const { id } = useParams();
  
  if (parseInt(id) !== projectDetails.id) {
    return <div className="container py-12">Project not found.</div>;
  }

  return (
    <div className="container py-12 md:py-24">
      <Link to="/projects" className="mb-6 inline-block">
        <Button variant="outline" size="sm">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Button>
      </Link>

      <div className="mx-auto max-w-4xl">
        <img
          src={projectDetails.image}
          alt={projectDetails.title}
          className="w-full rounded-lg shadow-md"
        />
        <h1 className="mt-6 text-3xl font-bold">{projectDetails.title}</h1>
        <p className="mt-2 text-muted-foreground">{projectDetails.description}</p>

        <h2 className="mt-6 text-2xl font-semibold">Key Features</h2>
        <ul className="mt-2 list-disc list-inside space-y-2">
          {projectDetails.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <h2 className="mt-6 text-2xl font-semibold">Technology Stack</h2>
        <ul className="mt-2 list-disc list-inside space-y-2">
          {Object.entries(projectDetails.techStack).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>

        <h2 className="mt-6 text-2xl font-semibold">Challenges & Solutions</h2>
        <ul className="mt-2 space-y-4">
          {projectDetails.challenges.map((challenge, index) => (
            <li key={index} className="border-l-4 border-primary pl-4">
              <strong>{challenge.title}:</strong> {challenge.solution}
            </li>
          ))}
        </ul>

        <h2 className="mt-6 text-2xl font-semibold">Project Status & Future Improvements</h2>
        <p className="mt-2">📌 <strong>Status:</strong> {projectDetails.status}</p>
        <ul className="mt-2 list-disc list-inside space-y-2">
          {projectDetails.upcomingFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <div className="mt-6 flex gap-4">
          <a href={projectDetails.links.demo} className="inline-block">
            <Button variant="default">Live Demo</Button>
          </a>
          <a href={projectDetails.links.repo} className="inline-block">
            <Button variant="outline">View Code</Button>
          </a>
        </div>
      </div>
    </div>
  );
}