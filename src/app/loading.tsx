import { Flex, Spin } from "antd";

export default function Loading() {
  return (
    <Flex align="center" justify="center" className="h-full w-full">
      <Spin size="large" spinning={true} />
    </Flex>
  );
}
