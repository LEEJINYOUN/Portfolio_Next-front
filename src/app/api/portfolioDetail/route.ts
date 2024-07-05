import { API_URL } from "@/constants/api/ApiUrl";
import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (params: any) => {
  try {
    // 포트폴리오 번호
    const portfolioId = params.url.substring(54);

    // 외부 API로 통신
    const response = await axios.get(`${API_URL}/portfolio/${portfolioId}/des`);

    // 통신 성공 하면 클라이언트에서 알리기
    return new NextResponse(JSON.stringify(response.data), {
      status: 200,
    });
  } catch (e) {
    console.log(e);
    return new NextResponse("server error", {
      status: 500,
    });
  }
};
