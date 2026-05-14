import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [githubRes] = await Promise.allSettled([
      fetch(`https://api.github.com/users/Niaal-B`, { next: { revalidate: 3600 } }).then(res => res.json())
    ]);

    const githubData = githubRes.status === "fulfilled" ? githubRes.value : {};

    return NextResponse.json({
      github: {
        name: githubData.name || "Nihal B",
        username: githubData.login || "Niaal-B",
        avatar: githubData.avatar_url || "https://github.com/Niaal-B.png",
        bio: githubData.bio || "Developer",
        location: githubData.location || "India",
        stats: [
          { label: "Repositories", value: githubData.public_repos || 0 },
          { label: "Followers", value: githubData.followers || 0 }
        ]
      },
      twitter: {
        name: "Nihal B",
        username: "Niaal-B",
        avatar: "https://github.com/Niaal-B.png",
        banner: "",
        bio: "Twitter currently unavailable",
        location: "",
        stats: []
      },
      linkedin: {
        name: "Nihal B",
        username: "nihal-b-b07408254",
        avatar: "https://github.com/Niaal-B.png",
        bio: "Python Backend Developer",
        location: "Kerala, India",
        stats: []
      },
      discord: {
        name: "Nihal",
        username: "niaal_b",
        avatar: "https://github.com/Niaal-B.png",
        bio: "Backend Developer",
        location: "India",
        stats: []
      },
      email: {
        name: "Drop an Email",
        username: "nihnihal504@gmail.com",
        avatar: "https://github.com/Niaal-B.png",
        bio: "Whether you have a question, a project idea, or just want to say hi, feel free to reach out!",
        location: "Inbox",
        stats: []
      }
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
