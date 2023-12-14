import { motion } from "framer-motion";

export default function About() {
  return (
    <main>
      <div
        className="w-1/2 flex flex-col items-center self-center"
        style={{ justifyContent: "inherit" }}
      >
        <p
          className="my-4 text-base font-medium"
          style={{ marginTop: "10%", marginLeft: "10%" }}
        >
          Hi! Ajita Ganguly here! I am the Java Full stack developer at a MNC
          company. I am from Kolkata but am currently based in Gurgaon.
        </p>
        <p
          className="my-4 text-base font-medium"
          style={{ marginTop: "2%", marginLeft: "10%" }}
        >
          I graduated in 2020 as a B.Tech in Computer Science and Engineering
          from SVIST, Kolkata.
        </p>
        <p
          className="my-4 text-base font-medium"
          style={{ marginTop: "2%", marginLeft: "10%" }}
        >
          My tech stack at work is Java, Spring Boot, Microservices, ReactJS,
          MySQL, and AWS. Apart from these I also have adept working knowledge
          in Git, MongoDB,Kafka, Jenkins, and Next.js
        </p>
        <p
          className="my-4 text-base font-medium"
          style={{ marginTop: "2%", marginLeft: "10%" }}
        >
          I love building web applications and in my free time I like to work on
          either building some demo application or doing leetcodes.
        </p>
        <p
          className="my-4 text-base font-medium"
          style={{ marginTop: "2%", marginLeft: "10%", marginBottom: "16%" }}
        >
          When I am not at the computer, I'm usually reading books or writing
          stories or songs.
        </p>
      </div>
    </main>
  );
}
