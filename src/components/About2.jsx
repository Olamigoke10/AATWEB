import { TargetIcon, Users, Award, Heart } from 'lucide-react'
import React from 'react'

const About2 = () => {

    const values = [
        {
            Title: "Accuracy",
            Text: "We provide precise and reliable results with attention to detail",
            icon: TargetIcon
        },
        {
            Title: "Expert Team",
            Text: "Our experienced professionals deliver exceptional quality",
            icon: Users
        },
        {
            Title: "Excellence",
            Text: "Committed to achieving the highest standards in everything we do",
            icon: Award
        },
        {
            Title: "Dedication",
            Text: "Passionately serving our clients with commitment and care",
            icon: Heart
        },
    ]

    return (
        <div className=' my-10'>
            <div className='text-lg md:text-2xl'>
                <h1 className='text-chart-2 font-bold md:font-extrabold uppercase text-center py-8 '>Our Core Values</h1>
            </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6 max-w-7xl mx-auto p-6'>
            {values.map((value, index) => (
                <div key={index} className='p-8 shadow-lg rounded-lg bg-background hover:shadow-xl transition-shadow duration-300 border border-gray-100'>
                    <div className='text-chart-2 mb-4'>
                        <value.icon size={40} />
                    </div>
                    <h2 className='text-xl font-bold text-foreground mb-2'>{value.Title}</h2>
                    <p className='text-accent-foreground leading-relaxed'>{value.Text}</p>
                </div>
            ))}
        </div>
        </div>
    )
}

export default About2