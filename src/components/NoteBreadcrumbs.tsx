'use client'

export default function TopicBreadcrumbs({ topicPath }: { topicPath: string[] }) {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li><a>*</a></li>
        {topicPath.slice(0, -1).map((topic, index) => (
          <li key={`breadcrumbs-${index}`}>
            <a>{topic}</a>
          </li>
        ))}
        <li>{topicPath[topicPath.length - 1]}</li>
      </ul>
    </div>
  );
}