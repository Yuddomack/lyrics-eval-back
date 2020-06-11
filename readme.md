# lyrics-eval-back

가사 평가 페이지 backend

## 0. WIKI

### 0-1. 커밋 템플릿 세팅

간단한 커밋 템플릿을 작성해뒀습니다.<br>
이 프로젝트에 수정 사항이 있는 경우에 아래 세팅을 적용하여 template을 준수해주시기 바랍니다.

- 커밋 템플릿 적용

  ```
  $ git config commit.template configs/commitTemplate.txt
  ```

- 사용

  ```
  $ git commit
  ... 템플릿 수정
  ```

### 0-2. 프로젝트 세팅 history

1. lint

   - eslint airbnb-base rule 세팅
   - prettier rule 세팅
   - rule은 필요에 따라 팀원과 협의하여 변경하도록 함

2. config

   - command line args를 사용하여 `dev`, `prod` argument를 사용할 수 있도록 함
   - package.json에 npm run dev, npm run prod 스크립트 작성
   - dotenv를 사용하여 환경변수를 사용할 수 있도록 함
   - .env 파일을 프로젝트 루트 경로에 생성하시오
     ```
       DEV_PORT=9001
       DEV_DB_HOST=xxx.xxx.xxx
       PROD_PORT=9002
       PROD_DB_HOST=xxx.xxx.xxx
     ```

3. logger

   - morgan 사용
   - dev, prod 별 format 및 파일 로그 별도관리하도록 세팅

4. ORM

   - sequelize 사용

### 0-3. 알려진 에러

- `Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client` - connect-timeout 미들웨어를 추가하여, 처리 시간이 오래 걸리면 response timeout을 응답하도록 하는데, 이렇게 응답이 완료된 상태에서 뒤늦게 실제 요청이 처리되어 response를 조작하는 경우 발생 (위험도 낮음)
