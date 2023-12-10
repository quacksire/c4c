import Link from "next/link"
import Image from 'next/image'

let courses = [
  {
    "name": "Art History Foundations",
    "subject": "Art",
    "skills": ["Art History"],
    "estimated_time": "6 weeks"
  },
  {
    "name": "Introduction to Cybersecurity",
    "subject": "Cybersecurity",
    "skills": ["Cybersecurity Basics"],
    "estimated_time": "8 weeks"
  },
  {
    "name": "Public Speaking Confidence",
    "subject": "Communication",
    "skills": ["Public Speaking"],
    "estimated_time": "5 weeks"
  },
  {
    "name": "Music Theory for Beginners",
    "subject": "Music",
    "skills": ["Music Theory"],
    "estimated_time": "4 weeks"
  },
  {
    "name": "Fitness and Nutrition Fundamentals",
    "subject": "Health",
    "skills": ["Fitness", "Nutrition"],
    "estimated_time": "7 weeks"
  },
  {
    "name": "Creative Writing Workshop",
    "subject": "Writing",
    "skills": ["Creative Writing"],
    "estimated_time": "6 weeks"
  },
  {
    "name": "Mobile App Development",
    "subject": "Software Development",
    "skills": ["Mobile App Development", "Programming"],
    "estimated_time": "10 weeks"
  },
  {
    "name": "Environmental Sustainability",
    "subject": "Environmental Science",
    "skills": ["Sustainability Practices"],
    "estimated_time": "5 weeks"
  },
  {
    "name": "Digital Marketing Essentials",
    "subject": "Marketing",
    "skills": ["Digital Marketing"],
    "estimated_time": "7 weeks"
  },
  {
    "name": "Psychology of Well-being",
    "subject": "Psychology",
    "skills": ["Well-being"],
    "estimated_time": "6 weeks"
  },
  {
    "name": "Economics for Everyone",
    "subject": "Economics",
    "skills": ["Economic Principles"],
    "estimated_time": "8 weeks"
  },
  {
    "name": "Introduction to Robotics",
    "subject": "Engineering",
    "skills": ["Robotics"],
    "estimated_time": "9 weeks"
  },
  {
    "name": "Game Design Basics",
    "subject": "Game Development",
    "skills": ["Game Design"],
    "estimated_time": "6 weeks"
  },
  {
    "name": "Conflict Resolution Strategies",
    "subject": "Management",
    "skills": ["Conflict Resolution"],
    "estimated_time": "5 weeks"
  },
  {
    "name": "Artificial Intelligence Ethics",
    "subject": "Ethics",
    "skills": ["AI Ethics"],
    "estimated_time": "7 weeks"
  },
  {
    "name": "Interior Design Principles",
    "subject": "Design",
    "skills": ["Interior Design"],
    "estimated_time": "6 weeks"
  },
  {
    "name": "History of Ancient Civilizations",
    "subject": "History",
    "skills": ["Ancient History"],
    "estimated_time": "8 weeks"
  },
  {
    "name": "Mathematics for Problem Solving",
    "subject": "Mathematics",
    "skills": ["Problem Solving", "Mathematics"],
    "estimated_time": "7 weeks"
  },
  {
    "name": "Business Analytics Fundamentals",
    "subject": "Business",
    "skills": ["Business Analytics"],
    "estimated_time": "6 weeks"
  },
  {
    "name": "Critical Thinking Mastery",
    "subject": "Critical Thinking",
    "skills": ["Critical Thinking"],
    "estimated_time": "5 weeks"
  },
  {
    "name": "Introduction to Astronomy",
    "subject": "Astronomy",
    "skills": ["Astronomy Basics"],
    "estimated_time": "7 weeks"
  },
  {
    "name": "Sustainable Architecture",
    "subject": "Architecture",
    "skills": ["Sustainable Design"],
    "estimated_time": "8 weeks"
  },
  {
    "name": "Business Negotiation Skills",
    "subject": "Business",
    "skills": ["Negotiation Skills"],
    "estimated_time": "6 weeks"
  },
  {
    "name": "Philosophy of Mind",
    "subject": "Philosophy",
    "skills": ["Philosophy of Mind"],
    "estimated_time": "7 weeks"
  },
  {
    "name": "Advanced JavaScript Concepts",
    "subject": "Web Development",
    "skills": ["JavaScript", "Advanced Web Development"],
    "estimated_time": "6 weeks"
  },
  {
    "name": "Python for Data Science",
    "subject": "Data Science",
    "skills": ["Python", "Data Analysis"],
    "estimated_time": "8 weeks"
  },
  {
    "name": "Java Programming Mastery",
    "subject": "Software Development",
    "skills": ["Java Programming"],
    "estimated_time": "7 weeks"
  },
  {
    "name": "C# Game Development",
    "subject": "Game Development",
    "skills": ["C#", "Game Development"],
    "estimated_time": "9 weeks"
  },
  {
    "name": "Full Stack Web Development",
    "subject": "Web Development",
    "skills": ["HTML", "CSS", "JavaScript", "Node.js", "React"],
    "estimated_time": "12 weeks"
  },
  {
    "name": "Mobile App UI/UX Design",
    "subject": "Mobile App Development",
    "skills": ["UI/UX Design", "Mobile App Design"],
    "estimated_time": "6 weeks"
  },
  {
    "name": "Data Structures and Algorithms",
    "subject": "Computer Science",
    "skills": ["Data Structures", "Algorithms"],
    "estimated_time": "10 weeks"
  },
  {
    "name": "Ruby on Rails Essentials",
    "subject": "Web Development",
    "skills": ["Ruby on Rails"],
    "estimated_time": "8 weeks"
  },
  {
    "name": "Blockchain Fundamentals",
    "subject": "Blockchain",
    "skills": ["Blockchain Basics", "Smart Contracts"],
    "estimated_time": "7 weeks"
  },
  {
    "name": "Swift Programming for iOS",
    "subject": "Mobile App Development",
    "skills": ["Swift", "iOS Development"],
    "estimated_time": "8 weeks"
  },
  {
    "name": "API Development with Django",
    "subject": "Web Development",
    "skills": ["Django", "API Development"],
    "estimated_time": "6 weeks"
  },
  {
    "name": "React Native Mobile App Development",
    "subject": "Mobile App Development",
    "skills": ["React Native", "Mobile App Development"],
    "estimated_time": "9 weeks"
  },
  {
    "name": "Machine Learning with TensorFlow",
    "subject": "Artificial Intelligence",
    "skills": ["TensorFlow", "Machine Learning"],
    "estimated_time": "10 weeks"
  },
  {
    "name": "DevOps Essentials",
    "subject": "DevOps",
    "skills": ["DevOps Practices", "Continuous Integration"],
    "estimated_time": "7 weeks"
  },
  {
    "name": "Angular Framework Deep Dive",
    "subject": "Web Development",
    "skills": ["Angular", "Web Development"],
    "estimated_time": "8 weeks"
  },
  {
    "name": "Rust Programming Language",
    "subject": "Software Development",
    "skills": ["Rust Programming"],
    "estimated_time": "6 weeks"
  },
  {
    "name": "GraphQL Fundamentals",
    "subject": "Web Development",
    "skills": ["GraphQL", "API Design"],
    "estimated_time": "7 weeks"
  },
  {
    "name": "Cybersecurity in Python",
    "subject": "Cybersecurity",
    "skills": ["Python", "Cybersecurity"],
    "estimated_time": "9 weeks"
  },
  {
    "name": "Docker for Beginners",
    "subject": "DevOps",
    "skills": ["Docker", "Containerization"],
    "estimated_time": "6 weeks"
  },
  {
    "name": "Vue.js Web Development",
    "subject": "Web Development",
    "skills": ["Vue.js", "Frontend Development"],
    "estimated_time": "7 weeks"
  },
  {
    "name": "Kotlin Programming for Android",
    "subject": "Mobile App Development",
    "skills": ["Kotlin", "Android Development"],
    "estimated_time": "8 weeks"
  },
  {
    "name": "Data Science with Python",
    "subject": "Data Science",
    "skills": ["Python", "Data Science"],
    "estimated_time": "9 weeks"
  },
  {
    "name": "C Programming Language",
    "subject": "Software Development",
    "skills": ["C Programming"],
    "estimated_time": "7 weeks"
  },
  {
    "name": "SwiftUI App Development",
    "subject": "Mobile App Development",
    "skills": ["SwiftUI", "iOS Development"],
    "estimated_time": "8 weeks"
  },
  {
    "name": "Data Visualization with Python",
    "subject": "Data Science",
    "skills": ["Python", "Data Visualization"],
    "estimated_time": "9 weeks"
  },
  {
    "name": "Android App Development",
    "subject": "Mobile App Development",
    "skills": ["Android Development", "Java Programming"],
    "estimated_time": "10 weeks"
  },
  {
    "name": "Data Science with R",
    "subject": "Data Science",
    "skills": ["R Programming", "Data Science"],
    "estimated_time": "9 weeks"
  },
  {
    "name": "Data Science with SQL",
    "subject": "Data Science",
    "skills": ["SQL", "Data Science"],
    "estimated_time": "9 weeks"
  },
  {
    "name": "Data Science with Scala",
    "subject": "Data Science",
    "skills": ["Scala Programming", "Data Science"],
    "estimated_time": "9 weeks"
  },
  {
    "name": "Data Science with Java",
    "subject": "Data Science",
    "skills": ["Java Programming", "Data Science"],
    "estimated_time": "9 weeks"
  },
  {
    "name": "Data Science with MATLAB",
    "subject": "Data Science",
    "skills": ["MATLAB", "Data Science"],
    "estimated_time": "9 weeks"
  },
  {
    "name": "Data Science with Julia",
    "subject": "Data Science",
    "skills": ["Julia Programming", "Data Science"],
    "estimated_time": "9 weeks"
  },
  {
    "name": "Data Science with C#",
    "subject": "Data Science",
    "skills": ["C# Programming", "Data Science"],
    "estimated_time": "9 weeks"
  },
  {
    "name": "Node.js Backend Development",
    "subject": "Web Development",
    "skills": ["Node.js", "Backend Development"],
    "estimated_time": "8 weeks"
  },
  {
    "name": "Unity Game Development",
    "subject": "Game Development",
    "skills": ["Unity", "Game Design"],
    "estimated_time": "10 weeks"
  },
  {
    "name": "Scala Programming Language",
    "subject": "Software Development",
    "skills": ["Scala Programming"],
    "estimated_time": "7 weeks"
  },
  {
    "name": "Ethical Hacking Fundamentals",
    "subject": "Cybersecurity",
    "skills": ["Ethical Hacking"],
    "estimated_time": "9 weeks"
  },
  {
    "name": "Cloud Computing Essentials",
    "subject": "Cloud Computing",
    "skills": ["Cloud Computing", "AWS"],
    "estimated_time": "8 weeks"
  },
  {
    "name": "Mobile Game Development with Flutter",
    "subject": "Mobile App Development",
    "skills": ["Flutter", "Mobile Game Development"],
    "estimated_time": "9 weeks"
  },
  {
    "name": "C++ Programming Mastery",
    "subject": "Software Development",
    "skills": ["C++ Programming"],
    "estimated_time": "8 weeks"
  },
  {
    "name": "UI/UX Design Principles",
    "subject": "Design",
    "skills": ["UI/UX Design"],
    "estimated_time": "6 weeks"
  },
  {
    "name": "Natural Language Processing",
    "subject": "Artificial Intelligence",
    "skills": ["NLP", "Machine Learning"],
    "estimated_time": "10 weeks"
  },
  {
    "name": "WordPress Website Development",
    "subject": "Web Development",
    "skills": ["WordPress", "Website Development"],
    "estimated_time": "7 weeks"
  },
  {
    "name": "GraphQL with Apollo Client",
    "subject": "Web Development",
    "skills": ["GraphQL", "Apollo Client"],
    "estimated_time": "6 weeks"
  },
  {
    "name": "Digital Painting Techniques",
    "subject": "Art",
    "skills": ["Digital Painting"],
    "estimated_time": "5 weeks"
  },
  {
    "name": "Raspberry Pi Projects",
    "subject": "Hardware",
    "skills": ["Raspberry Pi", "DIY Electronics"],
    "estimated_time": "7 weeks"
  },
  {
    "name": "Advanced Excel for Business",
    "subject": "Business",
    "skills": ["Excel", "Business Analytics"],
    "estimated_time": "6 weeks"
  },
  {
    "name": "React.js Frontend Development",
    "subject": "Web Development",
    "skills": ["React.js", "Frontend Development"],
    "estimated_time": "8 weeks"
  },
  {
    "name": "3D Modeling with Blender",
    "subject": "Design",
    "skills": ["Blender", "3D Modeling"],
    "estimated_time": "9 weeks"
  },
  {
    "name": "iOS App Monetization Strategies",
    "subject": "Mobile App Development",
    "skills": ["iOS Development", "Monetization"],
    "estimated_time": "7 weeks"
  },
  {
    "name": "Google Cloud Platform Basics",
    "subject": "Cloud Computing",
    "skills": ["Google Cloud Platform", "Cloud Services"],
    "estimated_time": "8 weeks"
  },
  {
    "name": "Arduino Programming for Beginners",
    "subject": "Hardware",
    "skills": ["Arduino Programming", "DIY Electronics"],
    "estimated_time": "6 weeks"
  },
  {
    "name": "Social Media Marketing Strategies",
    "subject": "Marketing",
    "skills": ["Social Media Marketing"],
    "estimated_time": "7 weeks"
  }
]


export default async function CoursesPage() {

    function CourseCard({course}: any) {
        return (
          <Link className="card w-96 bg-base-100 shadow-xl" href={`/learn/courses/${String(course.name).toLowerCase().replaceAll(" ", "-")}`}>
            <figure>
                <Image src={`https://picsum.photos/id/${Math.floor((Math.random() * 200) + 1)}/500/500`} alt={course.skills.join(', ')} width={500} height={500} loading="lazy" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {course.name}
              </h2>
              <p>{course.subject}</p>
              <div className="card-actions justify-end">
                {Array.isArray(course.skills) && course.skills.map((skill: any) => (
                  <div className="badge badge-outline" key={skill}>{skill}</div>
                ))}
              </div>
            </div>
        </Link>
        )
      }

    return (
        <>
        <div className="hero min-h-[50vh] bg-base-200">
            <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">Course Catelog</h1>
                <p className="py-6">Enroll in a course that interests you!</p>
            </div>
            </div>
        </div>

        {/* TODO: sort */}
        <div className="w-screen flex justify-center items-center bg-base-200">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-20 items-center">
                {courses.map((course: any) => (
                    <CourseCard course={course} key={course.name} />
                ))}
            </div>
        </div>
        
        </>
    )
}
/*
{
    "name": "iOS App Monetization Strategies",
    "subject": "Mobile App Development",
    "skills": ["iOS Development", "Monetization"],
    "estimated_time": "7 weeks"
  },
*/