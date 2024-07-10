"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { ImageIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Empty from "@/components/empty";
import Heading from "@/components/heading";
import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { TFormSchema, formSchema } from "./validation";

function ImagePage() {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);

  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmitHandler = async (values: TFormSchema) => {
    try {
      setImages([]);

      const response = await axios.post("/api/image", values);
      const urls = response.data.map((image: { url: string }) => image.url);

      setImages(urls);
      form.reset();
    } catch (error) {
      // TODO: Open Pro Modal
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Image Generation"
        description="Convert your prompt into an image"
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmitHandler)}
              className="grid w-full grid-cols-12 gap-2 rounded-lg border p-4 px-3 focus-within:shadow-sm md:px-6"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        {...field}
                        disabled={isLoading}
                        placeholder="A picture of a duck in the office"
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                disabled={isLoading}
                className="col-span-12 w-full lg:col-span-2"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="mt-4 space-y-4">
          {isLoading && (
            <div className="p-20">
              <Loader />
            </div>
          )}
          {images.length === 0 && !isLoading && (
            <Empty label="No images generated" />
          )}
          <div>Images will be rendered here</div>
        </div>
      </div>
    </div>
  );
}

export default ImagePage;
