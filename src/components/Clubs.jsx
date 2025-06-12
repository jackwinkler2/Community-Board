import React from "react";
import ClubCard from "./ClubCard";
const Clubs = () => {

    const clubData = [
        {
            image: "https://www.hackumbc.tech/hackumbcdog2025.png",
            name: "HackUMBC",
            description: "UMBC's annual hackathon planning committee",
            website: "https://www.hackumbc.tech"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoReNSnWNxeFPRFjZraFYUb5__FYTTdUkfg&s",
            name: "STARS Computing Corps",
            description: "Computer science networking group",
            website: "https://stars.umbc.edu"
        },
                {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoReNSnWNxeFPRFjZraFYUb5__FYTTdUkfg&s",
            name: "STARS Computing Corps",
            description: "Computer science networking group",
            website: "https://stars.umbc.edu"
        },
                {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoReNSnWNxeFPRFjZraFYUb5__FYTTdUkfg&s",
            name: "STARS Computing Corps",
            description: "Computer science networking group",
            website: "https://stars.umbc.edu"
        },
                {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoReNSnWNxeFPRFjZraFYUb5__FYTTdUkfg&s",
            name: "STARS Computing Corps",
            description: "Computer science networking group",
            website: "https://stars.umbc.edu"
        },
                {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoReNSnWNxeFPRFjZraFYUb5__FYTTdUkfg&s",
            name: "STARS Computing Corps",
            description: "Computer science networking group",
            website: "https://stars.umbc.edu"
        },
                {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoReNSnWNxeFPRFjZraFYUb5__FYTTdUkfg&s",
            name: "STARS Computing Corps",
            description: "Computer science networking group",
            website: "https://stars.umbc.edu"
        },
                {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoReNSnWNxeFPRFjZraFYUb5__FYTTdUkfg&s",
            name: "STARS Computing Corps",
            description: "Computer science networking group",
            website: "https://stars.umbc.edu"
        },
                {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoReNSnWNxeFPRFjZraFYUb5__FYTTdUkfg&s",
            name: "STARS Computing Corps",
            description: "Computer science networking group",
            website: "https://stars.umbc.edu"
        },
                {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoReNSnWNxeFPRFjZraFYUb5__FYTTdUkfg&s",
            name: "STARS Computing Corps",
            description: "Computer science networking group",
            website: "https://stars.umbc.edu"
        },
                {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoReNSnWNxeFPRFjZraFYUb5__FYTTdUkfg&s",
            name: "STARS Computing Corps",
            description: "Computer science networking group",
            website: "https://stars.umbc.edu"
        },
                {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoReNSnWNxeFPRFjZraFYUb5__FYTTdUkfg&s",
            name: "STARS Computing Corps",
            description: "Computer science networking group",
            website: "https://stars.umbc.edu"
        },
    ]

    return ( 
        <div className = "clubs">
            {clubData.map((club, index) => (
                <ClubCard
                key={index}
                image={club.image}
                name={club.name}
                description={club.description}
                website={club.website}
                />
            ))}
        </div>
    ) }

export default Clubs;