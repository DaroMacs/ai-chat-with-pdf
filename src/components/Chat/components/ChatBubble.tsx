import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formattedText } from "@/lib/utils";
import { Message } from "ai/react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";

const convertNewLines = (text: string) =>
  text.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));

interface IChatLineProps extends Partial<Message> {
  sources: string[];
}

export function ChatLine({
  role = "assistant",
  content,
  sources,
}: IChatLineProps) {
  if (!content) {
    return null;
  }
  const formattedMessage = convertNewLines(content);

  return (
    <div>
      <Card className="mb-2">
        <CardHeader>
          <CardTitle
            className={
              role != "assistant"
                ? "text-amber-500 dark:text-amber-200"
                : "text-blue-500 dark:text-blue-200"
            }
          >
            {role == "assistant" ? "AI" : "You"}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <Balancer>{formattedMessage}</Balancer>
        </CardContent>
        <CardFooter>
          <CardDescription className="w-full">
            {sources && sources.length ? (
              <Accordion type="single" collapsible className="w-full">
                {sources.map((source, index) => (
                  <AccordionItem value={`source-${index}`} key={index}>
                    <AccordionTrigger>{`Source ${index + 1}`}</AccordionTrigger>
                    <AccordionContent>
                      <ReactMarkdown>{formattedText(source)}</ReactMarkdown>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <></>
            )}
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}
