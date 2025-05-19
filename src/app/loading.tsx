import Spin from '@/components/client/Spin';
import { Flex } from '@/components/client/Flex';

export default function Loading() {
  return (
    <Flex align="center" justify="center" className="h-full w-full">
      <Spin spinning={true} />
    </Flex>
  );
} 