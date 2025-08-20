import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from '@/components/ui/badge';
import { usePlanAccess } from '@/hooks/use-plan-access';
import { useConvexMutation, useConvexQuery } from '@/hooks/use-convex-query';
import { api } from '@/convex/_generated/api';
import { Crown, Ghost, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewProjectModal = ({ isOpen, onClose }) => {

    const [isUploading, setIsUploading] = useState(false);
    const [projectTitle, setProjectTitle] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null)

    const handleClose = () => {
        onClose();
    }

    const { data: projects } = useConvexQuery(api.projects.getUserProjects);
    const currentProjectCount = projects?.length || 0;
    const { isFree, canCreateProject } = usePlanAccess();

    const {mutate: createProject} =useConvexMutation(api.projects.create);

    const canCreate = canCreateProject(currentProjectCount);

    const

    return (
        <>
            <Dialog open={isOpen} onOpenChange={handleClose}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>

                        {
                            isFree && (
                                <Badge variant="secondary" className="bg-slate-700 text-white/70">
                                    {currentProjectCount}/3 projects
                                </Badge>
                            )
                        }
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                    <div className='space-y-6'>
                        {
                        isFree && currentProjectCount >= 2 && (<Alert className="bg-amber-500/10 border-amber-500/20">
                            <Crown className='h-5 w-5 text-amber-400'/>
                            <AlertDescription className="text-amber-300/80">
                                <div className='font-semibold text-amber-400 mb-1'>
                                    {
                                        currentProjectCount === 2 ? "This will be your last free project. Upgrade to Nova Pro for unlimitied projects." : "Free plan is limited to 3 projects. Upgrade to Nova Pro to create more projects."
                                    }
                                </div>
                            </AlertDescription>
                        </Alert>)
                        }


                        
                    </div>

                    <DialogFooter>
                        <Button variant="ghost" onClick={handleClose} disabled={isUploading} className="text-white/70 hover:text-white">
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleCreateProject} disabled={!selectedFile || !projectTitle.trim() || isUploading} >
                            {
                                isUploading ? (
                                    <>
                                        <Loader2 className='h-4 w-4 animate-spin'/>
                                        Creating...
                                    </>
                                ) : (
                                    "Create Project"
                                )
                            }
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default NewProjectModal