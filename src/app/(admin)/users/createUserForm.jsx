"use client";
import { redirect } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaSpinner } from "react-icons/fa6"

const UserForm = ({ user = {}, action }) => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(
    action,
    user || { messsage: undefined }
  );
  if (state?.status === "ok") {
    redirect(`/users/${state.user.id || user.id}`);
  }

  function SubmitButton() {
    const { pending } = useFormStatus()
   
    return (
      <Button type="submit" aria-disabled={pending}>
        {pending ? <p className="">Save</p> : <FaSpinner className="animate-spin" />}
        {/* Add */}
      </Button>
    )
  }

  return (
    <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 lg:max-w-lg"></div>
    <form action={formAction}>
      {state?.id && <input type="hidden" name="id" value={state?.id} />}
      <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">
                  Create User Account
                </CardTitle>
                <CardDescription className="text-center">
                  Create User Details
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">   
      <div className="form-control sm:max-w-sm">
        <Label className="label" htmlFor="name">
          <span className="label-text">Name</span>
        </Label>
        <Input
          type="text"
          className="input input-bordered sm:max-w-sm"
          name="name"
          id="name"
          defaultValue={state?.name}
        />
      </div>
    </CardContent>
    <CardContent className="grid gap-4">
      <div className="form-control sm:max-w-sm">
        <Label className="label" htmlFor="email">
          <span className="label-text">Email</span>
        </Label>
        <Input
          type="email"
          className="input input-bordered sm:max-w-sm"
          name="email"
          id="email"
          defaultValue={state?.email}
        />
      </div>
      </CardContent>
      <CardContent className="grid gap-4">
      <div className="form-control sm:max-w-sm">
        <Label className="label" htmlFor="password">
          <span className="label-text">Password</span>
        </Label>
        <Input
          type="password"
          className="input input-bordered sm:max-w-sm"
          name="password"
          id="password"
          defaultValue={state?.email}
        />
      </div>
      </CardContent>
      {/* <div className="form-control sm:max-w-sm">
        <label className="label" htmlFor="imageUrl">
          <span className="label-text">Profile picture url</span>
        </label>
        <input
          type="text"
          className="input input-bordered sm:max-w-sm"
          id="imageUrl"
          name="imageUrl"
          defaultValue={state?.imageUrl}
        />
      </div> */}
       <CardFooter className="flex flex-col">
      <div className="form-control sm:max-w-sm my-6">
        {/* <Button
          className="w-full"
          type="submit"
          aria-disabled={pending}
        >
          {Save
        </Button> */}
        <SubmitButton />
      </div>
      </CardFooter>
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
      </Card>
              
    </form>
    </div>
    
  );
};

export default UserForm;
