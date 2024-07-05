import { API_URL } from "@/constants/api/ApiUrl";
import axios from "axios";
import { NextResponse } from "next/server";

// 파라미터 호출할 때 request, context 필수
export const GET = async (request: Request, context: any) => {
  // 파라미터 호출
  const { params } = context;

  // 포트폴리오 id
  const portfolioId = params.portfolioId;

  try {
    // 외부 API로 통신
    const response = await axios.get(`${API_URL}/portfolio/${portfolioId}/des`);

    // 통신 성공 하면 클라이언트에서 알리기
    return new NextResponse(JSON.stringify(response.data), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("server error", {
      status: 500,
    });
  }
};
