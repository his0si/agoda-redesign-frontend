// src/auth/pages/KakaoCallback.tsx
import { kakaoLogin } from '@src/common/api/memberApi';
import type { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function KakaoCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogin = async () => {
      const code = new URL(window.location.href).searchParams.get('code');
      if (!code) {
        alert('인가 코드가 없습니다.');
        return;
      }

      try {
        const result = await kakaoLogin(code);
        alert(`로그인 성공! 환영합니다, ${result.name}님`);

        // TODO: 토큰 저장하기 - 확인
        localStorage.setItem('token', result.token);

        // 로그인 후 원하는 페이지로 이동...
        navigate('/');
      } catch (err) {
        const error = err as AxiosError<{ message?: string }>;
        alert(
          '로그인 실패: ' + (error?.response?.data?.message || error.message)
        );
        navigate('/');
      }
    };

    handleLogin();
  }, [navigate]);

  return <p>로그인 중입니다... 잠시만 기다려주세요.</p>;
}
