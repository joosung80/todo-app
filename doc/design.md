# TODO 어플리케이션 설계 문서

## 1. 개요
간단한 TODO 관리 어플리케이션으로, 사용자가 할 일을 추가, 수정, 삭제, 완료 처리할 수 있는 웹 애플리케이션입니다.

## 2. 시스템 아키텍처

### 프론트엔드
- **기술 스택**: React
- **호스팅**: GitHub Pages
- **주요 기능**:
  - TODO 항목 생성, 읽기, 수정, 삭제 (CRUD)
  - TODO 항목 완료 상태 토글
  - TODO 목록 필터링 (전체/완료/미완료)
  - 반응형 디자인

### 백엔드 (AWS 서버리스)
- **기술 스택**: AWS CDK
- **주요 컴포넌트**:
  - **API Gateway**: RESTful API 엔드포인트 제공
  - **Lambda**: 비즈니스 로직 처리
  - **DynamoDB**: TODO 항목 저장
  - **Cognito**: 익명 사용자 인증

## 3. API 설계

### 엔드포인트
- `GET /todos`: TODO 목록 조회
- `POST /todos`: 새로운 TODO 항목 생성
- `PUT /todos/{id}`: TODO 항목 수정
- `DELETE /todos/{id}`: TODO 항목 삭제
- `PATCH /todos/{id}/toggle`: TODO 항목 완료 상태 토글

### 데이터 모델
```typescript
interface Todo {
  id: string;          // UUID
  title: string;       // TODO 제목
  description?: string; // 상세 설명 (선택)
  completed: boolean;   // 완료 상태
  createdAt: string;   // 생성 시간
  updatedAt: string;   // 수정 시간
}
```

## 4. 인증 설계
- Cognito User Pool을 사용하여 익명 사용자 인증 구현
- 사용자별로 임시 식별자 할당
- 세션 기반 데이터 관리

## 5. 배포 전략
1. **프론트엔드**:
   - GitHub Actions를 통한 자동 배포
   - GitHub Pages를 통한 정적 호스팅

2. **백엔드**:
   - AWS CDK를 통한 인프라 자동화
   - 단계별 배포 (개발/프로덕션)

## 6. 보안 고려사항
- CORS 설정
- API 요청 제한 (Rate Limiting)
- DynamoDB 항목 단위의 접근 제어

## 7. 향후 확장 가능성
- 사용자 인증 추가
- TODO 항목 공유 기능
- 마감일 및 알림 기능
- 카테고리/태그 기능
