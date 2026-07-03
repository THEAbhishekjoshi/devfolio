import { NextResponse } from "next/server";

const query = `
query ($userName: String!, $from: DateTime!, $to: DateTime!) {
  user(login: $userName) {
    contributionsCollection(from: $from, to: $to) {
      contributionCalendar {
        totalContributions
      }

      totalCommitContributions
      totalPullRequestContributions
      totalIssueContributions
      totalPullRequestReviewContributions
    }
  }
}
`

export async function GET() {
    const today = new Date()
    const threeMonthsAgo = new Date()
    threeMonthsAgo.setMonth(today.getMonth() - 3)

    const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables: {
                userName: "THEAbhishekjoshi",
                from: threeMonthsAgo.toISOString(),
                to: today.toISOString(),
            },
        }),
        next: {
            revalidate: 60 * 60 * 24
        }
    })
    const data = await response.json()
    return NextResponse.json(data.data.user.contributionsCollection)
}