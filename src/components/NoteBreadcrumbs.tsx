import Link from "next/link";
import prisma from '@/lib/prisma'

export default async function TopicBreadcrumbs({ topicPath }: { topicPath: [number, string][] }) {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li><Link href="/">*</Link></li>
        {topicPath.slice(0, -1).map(([topicId, title], index) => (
          <li key={`breadcrumbs-${topicId}`}>
            <Link href={`/${topicId}`}>{title}</Link>
          </li>
        ))}
        <li>{topicPath[topicPath.length - 1][1]}</li>
      </ul>
    </div>
  );
}