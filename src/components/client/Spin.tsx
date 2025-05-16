'use client';

import { Spin as AntSpin } from 'antd';

interface SpinProps {
    spinning: boolean;
    tip?: string;
}

export const Spin: React.FC<SpinProps> = ({ spinning, tip }) => (
    <AntSpin spinning={spinning} tip={tip} />
);

export default Spin;

