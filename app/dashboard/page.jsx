import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import DashboardContent from "@/app/component/dashboard-content";

export default async function Dashboard() {
  // Fetch the session on the server
  const session = await getServerSession(authOptions);

  // If no session exists, redirect to sign-in page
  if (!session || !session.user) {
    redirect("/auth/signin");
  }

  // Extract the user's data from the session
  const { name, email, image } = session.user;

  // Card data for four instances
  const cardData = [
    {
      imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      altText: "Kendrick Lamar - GNX Album Cover",
      captionText: "Hawaii Trip",
      date: "June 12, 2023",
      count: "124 photos"
    },
    {
      imageSrc: "https://i.scdn.co/image/ab67616d0000b273f57f275df27df73d88b56d9b",
      altText: "Drake - Take Care Album Cover",
      captionText: "Maldives Trip",
      date: "August 3, 2023",
      count: "87 photos"
    },
    {
      imageSrc: "https://i.scdn.co/image/ab67616d0000b273a0db274aa792f13f9ff8e266",
      altText: "J. Cole - 2014 Forest Hills Drive Album Cover",
      captionText: "My Wedding",
      date: "October 15, 2023",
      count: "256 photos"
    },
    {
      imageSrc: "https://i.scdn.co/image/ab67616d0000b2732e8e77481548bdab7ff2bb42",
      altText: "Travis Scott - Rodeo Album Cover",
      captionText: "Birthday Bash",
      date: "December 21, 2023",
      count: "93 photos"
    },
  ];

  return <DashboardContent user={{ name, email, image }} cardData={cardData} />;
}
