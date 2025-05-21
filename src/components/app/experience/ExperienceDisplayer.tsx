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
  const [mode, setMode] = useState<DisplayerMode>('Work');
  const data = mode === 'Work' ? MyJobs : MyEducation;

  return (
    <div className="w-full h-[70%] flex flex-col">
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

      <div className="flex-1 overflow-y-auto border-2 border-white rounded-md mt-1 p-4">
        <Timeline mode="left" style={{padding: '20px'}}>
          {data.map((exp) => (
            <Timeline.Item
              key={exp.id}
              dot={
                <Avatar
                  src={exp.logo}
                  size={60}
                  style={{ backgroundColor: 'white'}}
                />
              }
            >
              <ExperienceInstance experience={exp} />
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </div>
  );
}