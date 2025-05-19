'use cilent'

import Link from "next/link";
import { Button } from "../client/Button";
import {HomeOutlined } from '@ant-design/icons';
const Dot = () => (
  <div style={{
    width: 8,
    height: 8,
    background: 'white',
    borderRadius: 2,
    display: 'inline-block',
    margin: '0 12px'
  }} />
);

export const NavBar: React.FC = () => {
    return(
         <div className="flex items-center justify-evenly w-full h-full">
      <Link href="/projects">
        <Button type="text">View Projects</Button>
      </Link>
      <Dot />
      <Link href="/skills">
        <Button type="text">Skills</Button>
      </Link>
      <Dot />
      <Link href="/" aria-label="Home">
         <button className="custom-icon-button" aria-label="Home">
    <HomeOutlined />
  </button>
      </Link>
      <Dot />
      <Link href="/experience">
        <Button type="text">Experience</Button>
      </Link>
      <Dot />
      <Button type="text" href="mailto:jkaps11@gmail.com">
        Contact Me
      </Button>
    </div>
)
};

export default NavBar