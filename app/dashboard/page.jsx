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
      imageSrc: "https://media.istockphoto.com/id/482325622/photo/hawaii-travel-collage.jpg?s=612x612&w=0&k=20&c=_Z0wovUJDBY9R-Imlh6qUlDYVvFHFu31uwGh7QVoPlI=",
      altText: "Kendrick Lamar - GNX Album Cover",
      captionText: "Hawaii Trip",
      date: "June 12, 2023",
      count: "124 photos"
    },
    {
      imageSrc: "https://c8.alamy.com/comp/JYKF9H/collage-of-summer-beach-maldives-images-nature-and-travel-background-JYKF9H.jpg",
      altText: "Drake - Take Care Album Cover",
      captionText: "Maldives Trip",
      date: "August 3, 2023",
      count: "87 photos"
    },
    {
      imageSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/23df9828432275.55c008b99a10a.jpg",
      altText: "J. Cole - 2014 Forest Hills Drive Album Cover",
      captionText: "My Wedding",
      date: "October 15, 2023",
      count: "256 photos"
    },
    {
      imageSrc: "https://marketplace.canva.com/EAGMN5J4lBE/1/0/1600w/canva-a-happy-birthday-party-photo-collage-P0ZGKSyZh4I.jpg",
      altText: "Travis Scott - Rodeo Album Cover",
      captionText: "Birthday Bash",
      date: "December 21, 2023",
      count: "93 photos"
    },
  ];

  return( <div className="bg-oklch(0.439 0 0)">
  <DashboardContent user={{ name, email, image }} cardData={cardData} />;
  </div>
)
}
