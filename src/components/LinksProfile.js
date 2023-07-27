import { useState } from "react";
import { Link } from "react-router-dom";

export default function LinksProfile() {
  const links = [
    { id: Math.random(), color: "blue", link: " الملف الشخصى ", path: "myprofaile" },
    { id: Math.random(), color: "blue", link: " كورساتى ", path: "mycourses" },
    { id: Math.random(), color: "blue", link: " تفاصيل المشاهدات", path: "views" },
    { id: Math.random(), color: "blue", link: " نتائج الامتحانات", path: "results" },
    { id: Math.random(), color: "blue", link: " نتائج الواجبات ", path: "Assignmentresults" },
    { id: Math.random(), color: "blue", link: " نتائج كويز الامتحانات ", path: "resultsvideos" },
    // ... العناصر الأخرى
  ];

  const [clickedIndex, setClickedIndex] = useState(0);

  const handleClick = (index) => {
    if (index === clickedIndex) {
      // إذا تم الضغط على نفس العنصر مرة أخرى، فلا يتم تغيير اللون
      return;
    }

    setClickedIndex(index);
  };

  return (
    <>
      <div className="links-container">
        {links.map((link, index) => (
          <Link key={link.id} to={link.path}>
            <div
              onClick={() => handleClick(index)}
              style={{
                backgroundColor: clickedIndex === index ? "#3b82f6" : "white",
                color: clickedIndex === index ? "white" : "black",
              }}
            >
              <h5 className="font">{link.link}</h5>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

