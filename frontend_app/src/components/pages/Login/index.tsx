'use client';

import { ReactElement, ReactNode } from 'react';
import { Button, Statistic, Typography } from 'antd';
import { SecurityScanOutlined, UserOutlined } from '@ant-design/icons';
import CountUp from 'react-countup';

import Box from '@/components/common/Box';
import Input from '@/components/common/Input';

const { Text, Title } = Typography;

export default function Login(): ReactElement {
  return (
    <div className="flex-col items-center justify-center h-full relative py-6">
      <p
        className="text-3xl  text-center font-bold text-title-gradient-1"
      >
        더 편하게 휴가를 관리하세요!
      </p>

      <Box>
        <Input
          prefix={<UserOutlined />}
          placeholder="아이디를 입력하세요"
        />
        <Input
          prefix={<SecurityScanOutlined />}
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <Button
          size="large"
          type="primary"
          className="w-full"
        >
          로그인
        </Button>
      </Box>
      
      <section className="my-10 flex flex-col">
        <Text className="text-lg text-slate-600 font-bold">대다수의 기업에서 서비스를 이용하고 있어요!</Text>
        <Statistic
          title="월 간 서비스 이용자 수"
          value={42763168}
          formatter={(value: number) => <CountUp end={value} /> as ReactNode}
        />
      </section>

      <section className="my-10 flex flex-col">
        <Text className="text-lg text-slate-600 font-bold">모바일로 편하게 사내 휴가를 관리하세요</Text>
        <Statistic
          title="월 간 회원가입 이용자 수"
          value={4276}
          formatter={(value: number) => <CountUp end={value} /> as ReactNode}
        />
      </section>

      <footer className="w-full flex flex-col absolute left-0 bottom-0 mb-10">
        <Text className="text-slate-500">서비스 이용이 처음이신가요?</Text>
        <Button type="primary">회원가입</Button>
      </footer>
    </div>
  );
}
