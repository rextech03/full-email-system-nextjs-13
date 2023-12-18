'use client'
import { Button } from "@/components/ui/button";
import { FaSpinner } from "react-icons/fa6";
import { experimental_useFormStatus as useFormStatus } from "react-dom";



export const SaveButton = ({
    icon = null,
    label = "Save",
    loadingLabel = "Saving",
    disabled = false,
  }: {
    icon?: React.ReactElement | null;
    label?: string;
    loadingLabel?: string;
    disabled?: boolean;
  }) => {
    const { pending } = useFormStatus();
  
    return (
      <Button
        type="submit"
        
        aria-disabled={pending }
      >
        {pending ? (
          <FaSpinner className="animate-spin" message={loadingLabel} />
        ) : (
          <>
            {icon}
            {label}
            
          </>
        )}
      </Button>
    );
  };
  