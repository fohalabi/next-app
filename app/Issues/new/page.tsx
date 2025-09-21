'use client';
import React from 'react'
import { TextField, TextArea, Button } from '@radix-ui/themes';

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-4'>
       <TextField.Root placeholder="Title" />
       <TextArea placeholder="Description" />
       <Button variant='solid'>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage;
