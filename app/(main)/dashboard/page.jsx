"use client"

import { api } from '@/convex/_generated/api'
import { useConvexQuery } from '@/hooks/use-convex-query'
import React from 'react'

const Dashboard = () => {

  const {data: projects, isLoading} = useConvexQuery(api.projects.getUserProjects);

  console.log(projects);

  return (
    <div>
      <div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Dashboard