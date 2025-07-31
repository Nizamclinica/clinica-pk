"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { handleSummary, type FormState } from "@/lib/actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AlertCircle, Bot, Loader2, Sparkles } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Summarizing...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Summarize Reviews
        </>
      )}
    </Button>
  );
}

interface ReviewSummarizerProps {
  doctorName: string;
  sampleReviews: string;
}

export function ReviewSummarizer({ doctorName, sampleReviews }: ReviewSummarizerProps) {
  const initialState: FormState = {};
  const [state, dispatch] = useActionState(handleSummary, initialState);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <Bot className="h-6 w-6 text-primary" />
          AI Review Insights
        </CardTitle>
        <CardDescription>
          Paste reviews from around the web to get a quick, summarized analysis of patient sentiment and feedback.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={dispatch} className="space-y-4">
          <input type="hidden" name="doctorName" value={doctorName} />
          <div className="space-y-2">
            <Label htmlFor="reviews">Patient Reviews</Label>
            <Textarea
              id="reviews"
              name="reviews"
              placeholder="Paste patient reviews here..."
              rows={8}
              defaultValue={sampleReviews}
            />
          </div>
          {state?.error && (
             <Alert variant="destructive">
               <AlertCircle className="h-4 w-4" />
               <AlertTitle>Error</AlertTitle>
               <AlertDescription>{state.error}</AlertDescription>
             </Alert>
          )}
          <SubmitButton />
        </form>

        {state?.summary && (
          <div className="mt-6">
            <h3 className="font-headline text-lg font-semibold mb-2">Summary</h3>
            <div className="prose prose-sm max-w-none text-foreground bg-secondary/50 p-4 rounded-md">
              <ul className="space-y-2">
                {state.summary.split('*').filter(s => s.trim().length > 0).map((item, index) => (
                  <li key={index}>{item.trim()}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
