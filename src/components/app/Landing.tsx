import Image from 'next/image'
import { Button } from '../ui/button'
import { ButtonGroup } from '../ui/button-group'
import { Mail, MapPin } from 'lucide-react'
import SocialBox from './SocialBox'
export default function LandingSection() {
    return (
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between py-16">
            <div
                className="relative w-80 h-80 rounded-full border-[10px] border-white overflow-hidden shadow-md transition-all duration-300"
                style={{
                    boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                    transform: 'scale(1.02)',
                }}
            >
                <Image
                    src="/josh.jpg"
                    alt="Joshua Kaplan"
                    fill
                    className="object-cover rounded-full"
                    priority
                />
            </div>
            <div className="subtitle">
                <h1>Joshua Kaplan</h1>
                <p className="leading-[1.2]">Full Stack Developer</p>
                <p className="location flex items-center gap-2">
                    <MapPin aria-hidden />
                    Connecticut, USA
                </p>

                <div className="flex justify-start items-center gap-3 my-2">
                    <a href="/Joshua_Kaplan_Resume.pdf" download="Joshua_Kaplan_Resume.pdf">
                        <Button aria-label='Get resume'>Resume</Button>
                    </a>
                    <SocialBox />
                </div>
            </div>
        </div>
    )
}