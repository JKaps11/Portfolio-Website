'use client'
import {BookFilled, SnippetsFilled} from '@ant-design/icons';
import { Avatar, Segmented, Timeline } from "antd"
import { useState } from 'react';
import { MyJobs, MyEducation } from './Experiences';
import ExperienceInstance from './ExperienceInstance';

type DisplayerMode = "Work" | "Education"

interface ExperienceBase {
  id: string;
  date: string;
  title: string;
  description: string;
  logo: string;
}

export interface WorkExperience extends ExperienceBase {
  type: "work";
  position: string;
}

export interface EducationExperience extends ExperienceBase {
  type: "education";
  degree: string;
}

export type Experience = WorkExperience | EducationExperience;

export default function ExperienceDisplayer() {
  const [mode, setMode] = useState<DisplayerMode>('Work')
  const data = mode === 'Work' ? MyJobs : MyEducation
  const timelineItems = data.map((exp) => ({
    key: exp.id,
    dot: (
      <Avatar
        src={exp.logo}
        size={60}
        style={{ backgroundColor: 'white' }}
      />
    ),
    children: <ExperienceInstance experience={exp} />,
  }))

  return (
    <div className="w-full max-h-[70%] flex flex-col">
      <Segmented
        options={[
          { label: 'Work', value: 'Work', icon: <SnippetsFilled /> },
          { label: 'Education', value: 'Education', icon: <BookFilled /> },
        ]}
        style={{ border: '2px solid white' }}
        value={mode}
        onChange={setMode}
        block
        size="large"
      />

      <div className="flex-1 overflow-y-auto border-2 border-white rounded-md mt-1 p-4 pt-10">
        <Timeline
          mode="left"
          items={timelineItems}
          style={{ paddingLeft: '30px' }}
        />
      </div>
    </div>
  )
}