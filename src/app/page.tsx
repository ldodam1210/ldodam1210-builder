import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const CTA_HREF = "mailto:e1199800@naver.com";

const pains = [
  "입체인 커트를 종이 도식으로만 보여 줘야 한다",
  "자르는 순서를 사진 몇 장으로는 다 전달하기 어렵다",
  "정리한 커트 방법이 흩어져 쌓이지 않는다",
];

const steps = [
  { title: "패널 나누기", body: "3D 머리 위에 패널(커트 구획)을 나눈다" },
  { title: "순서 설계", body: "자르는 순서를 설계하고 돌려 보며 확인한다" },
  { title: "저장", body: "저장해서 수업 자료로 쓴다 (판매는 준비 중)" },
];

const panels = ["프론트", "사이드 L", "사이드 R", "크라운", "네이프"];

function CtaButton() {
  return (
    <Button asChild size="lg" className="h-12 px-6 text-base font-semibold">
      <a href={CTA_HREF} target="_blank" rel="noreferrer">
        이메일로 신청하기
      </a>
    </Button>
  );
}

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10 space-y-3">
      <Badge variant="secondary">{label}</Badge>
      <h2 className="text-2xl font-bold md:text-4xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden">
      {/* 1. 히어로 */}
      <section className="mx-auto max-w-5xl px-5 py-20 text-center md:py-32">
        <div className="rise space-y-6">
          <Badge variant="outline">지금 만들고 있어요 — 3D 시뮬레이션까지 완성</Badge>
          <p className="text-lg font-semibold text-primary">헤어띵크</p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            커트 레시피를
            <br />
            3D 로 설계하세요
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-xl">
            종이 도식과 마네킹 사진 대신, 3D 머리 위에서 패널을 설계하고
            저장하는 헤어 컷트 강사용 도구
          </p>
          <div className="pt-2">
            <CtaButton />
          </div>
        </div>
      </section>

      {/* 2. 문제 */}
      <section className="mx-auto max-w-5xl px-5 py-16 md:py-28">
        <div className="rise mx-auto max-w-3xl">
          <SectionTitle label="문제" title="아직도 종이에 그리고 계신가요?" />
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            새 커트 스타일을 가르치려면 종이에 패널을 그리고 마네킹 사진을 찍어
            수업 자료를 만듭니다. 입체인 커트를 평면으로 설명하다 보니, 같은
            설명을 몇 번씩 반복하게 됩니다.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pains.map((p) => (
            <Card key={p} className="rise">
              <CardContent className="text-base font-medium">{p}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. 작동 방식 */}
      <section className="mx-auto max-w-5xl px-5 py-16 md:py-28">
        <div className="rise mx-auto max-w-3xl">
          <SectionTitle label="작동 방식" title="세 단계면 커트 레시피 완성" />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            {steps.map((s, i) => (
              <Card key={s.title} className="rise">
                <CardHeader>
                  <Badge className="mb-2">{i + 1}</Badge>
                  <CardTitle className="text-lg font-bold">{s.title}</CardTitle>
                  <CardDescription className="text-base">{s.body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* 예시 화면 */}
          <div className="rise space-y-2">
            <p className="text-xs text-muted-foreground">예시 화면</p>
            <Card>
              <CardHeader>
                <CardTitle className="font-bold">투블럭 레이어드</CardTitle>
                <CardDescription>패널 5개 · 저장 전</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex justify-center">
                  <div className="relative size-40 rounded-full border-2 border-primary/60 bg-accent">
                    <div className="absolute inset-x-6 top-6 h-10 rounded-t-full border-b-2 border-dashed border-primary" />
                    <div className="absolute inset-y-10 left-1/2 border-l-2 border-dashed border-primary" />
                    <div className="absolute inset-x-4 bottom-10 border-t-2 border-dashed border-primary/70" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {panels.map((p, i) => (
                    <Badge key={p} variant={i === 0 ? "default" : "secondary"}>
                      {p}
                    </Badge>
                  ))}
                </div>
                <Separator />
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm" className="flex-1">
                    돌려 보기
                  </Button>
                  <Button size="sm" className="flex-1">
                    저장
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. 이래서 쓰게 돼요 */}
      <section className="mx-auto max-w-5xl px-5 py-16 md:py-28">
        <div className="rise mx-auto max-w-3xl">
          <SectionTitle label="이래서 쓰게 돼요" title="한 번 써 보면, 계속 쓰게 돼요" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="rise">
            <CardHeader>
              <CardDescription>처음 써 보면 ✨</CardDescription>
              <CardTitle className="text-lg font-bold leading-snug">
                종이에 그리던 패널이 3D 머리 위에 그대로 올라가고, 자르는 과정이
                돌려 보입니다
              </CardTitle>
            </CardHeader>
          </Card>
          <Card className="rise">
            <CardHeader>
              <CardDescription>계속 쓰게 되는 이유</CardDescription>
              <CardTitle className="text-lg font-bold leading-snug">
                새 커트 스타일을 수업 자료로 만들 때마다, 여기에 패널을 설계해
                쌓아 둡니다
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* 5. 다른 점 */}
      <section className="mx-auto max-w-3xl px-5 py-16 md:py-28">
        <div className="rise">
          <SectionTitle label="다른 점" title="종이 · 사진 · GPT 와 무엇이 다른가요" />
          <ul className="space-y-4 text-base md:text-lg">
            <li>종이 도식 · 사진과 달리 패널과 자르는 순서를 입체로 돌려 봅니다.</li>
            <Separator />
            <li>GPT 는 말로 설명해 줄 뿐, 3D 커트 패널을 설계 · 저장하게 해 주지 않습니다.</li>
          </ul>
        </div>
      </section>

      {/* 7. 시작하기 */}
      <section className="mx-auto max-w-3xl px-5 py-16 md:py-28">
        <Card className="rise text-center">
          <CardContent className="space-y-6 py-8">
            <h2 className="text-2xl font-bold md:text-4xl">먼저 써 보고 싶은 강사님을 찾아요</h2>
            <p className="text-muted-foreground">
              이메일로 이름과 가르치는 커트 스타일을 알려 주세요.
            </p>
            <CtaButton />
          </CardContent>
        </Card>
      </section>

      {/* 8. 만든 사람 */}
      <section className="mx-auto max-w-3xl px-5 py-16 md:py-28">
        <div className="rise space-y-3 text-center">
          <Badge variant="secondary">만든 사람</Badge>
          <p className="text-xl font-bold">Hair Think</p>
          <p className="text-muted-foreground">
            헤어 컷트를 3D 로 시뮬레이션하는 도구를 직접 만들고 있습니다.
          </p>
        </div>
      </section>

      {/* 9. 푸터 */}
      <footer className="px-5 pb-12">
        <Separator className="mx-auto mb-8 max-w-5xl" />
        <div className="space-y-1 text-center text-sm text-muted-foreground">
          <p>헤어띵크 · 2026</p>
          <p>Built with Claude Code · AI 프로덕트 빌더 클럽 3기</p>
        </div>
      </footer>
    </main>
  );
}
