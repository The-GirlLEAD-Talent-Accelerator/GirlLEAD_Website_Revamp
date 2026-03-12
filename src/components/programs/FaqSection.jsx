import { useState } from "react";
import AccordionItem from "../common/AccordionItem";

const faqs = [
    {
        question: "What is GirlLEAD?",
        answer: "GirlLEAD is a social enterprise dedicated to empowering girls and young women with leadership, entrepreneurship, and technology skills, enabling them to reach their full potential and contribute to solving global challenges."
    },
    {
        question: "Who can apply for GirlLEAD programs?",
        answer: "Our programs are open to girls and young women, especially those from underserved communities, typically between the ages of 13 to 30. Each program has its own eligibility criteria, which will be clearly stated in the application form."
    },
    {
        question: "Are the programs free?",
        answer: "Most of our programs are fully funded and free for participants, while others are highly subsidized, thanks to our partners and sponsors. Where there are costs, we provide clear information upfront."
    },
    {
        question: "How do I apply for a program?",
        answer: "Simply visit our Programs page, choose the program you’re interested in, and click the application link. Each program has its own Google Form link for easy registration."
    },
    {
        question: "What kinds of programs do you offer?",
        answer: (
            <div>
                <p>We run programs in three main areas:</p>
                <ul className="list-disc ml-5 mt-2 space-y-2">
                    <li><span className="font-medium">Technology:</span> digital skills, coding, data science, STEM exposure</li>
                    <li><span className="font-medium">Social Entrepreneurship:</span> business skills, innovation, problem-solving</li>
                    <li><span className="font-medium">Leadership:</span> personal development, communication, community leadership</li>
                </ul>
            </div>
        )
    },
    {
        question: "Do I need prior experience to join?",
        answer: "No prior experience is required for most programs. We welcome beginners who are eager to learn, as well as those looking to deepen their skills."
    },
    {
        question: "Where do the programs take place?",
        answer: "Programs may be held in-person in select locations or virtually, depending on the track. Details are always included in the application form."
    },
    {
        question: "What happens after I complete a program?",
        answer: "Graduates join the GirlLEAD Fellows Network, gaining access to possible mentorship, advanced opportunities, and a supportive community of young leaders and changemakers."
    },
    {
        question: "Can boys or men apply for the programs?",
        answer: "Our programs are primarily designed for girls and young women. However, some initiatives may welcome wider participation depending on the theme and partners. When the program is open to boys and men, the application will indicate so."
    },
    {
        question: "How can I support GirlLEAD?",
        answer: "You can support us by volunteering, mentoring, partnering, or donating. Visit our “Join Us” page for details."
    }
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-bg-mute py-20 px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-text-main mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-text-muted max-w-lg mx-auto">
                        Everything you need to know about GirlLEAD programs and how you can get involved.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

