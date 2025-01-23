import BlogCard from "@/components/BlogCard";

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const blogs = await res.json();
  // console.log(blogs);
  return (
    <div className="my-10">
      <h2 className="text-2xl sm:text-3xl sm:font-bold text-center py-6">My All Blogs - {blogs.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {
          blogs.map(blog => <BlogCard
            key={blog.id}
            blog={blog}
          ></BlogCard>)
        }
      </div>
    
    </div>
  );
}
