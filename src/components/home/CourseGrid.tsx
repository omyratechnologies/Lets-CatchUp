"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Star, Users } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function CourseGrid() {
  const courses = [
    {
      id: "course-web-dev",
      title: "Advanced Web Architecture",
      instructor: "Dr. Sarah Jenkins",
      rating: 4.9,
      students: "1.2k",
      duration: "12 weeks",
      category: "Development",
      price: "$199",
    },
    {
      id: "course-data-science",
      title: "Mastering Machine Learning",
      instructor: "Michael Chen",
      rating: 4.8,
      students: "2.4k",
      duration: "15 weeks",
      category: "Data Science",
      price: "$249",
    },
    {
      id: "course-ai",
      title: "Neural Networks & GPT-4",
      instructor: "Prof. Alan Turing",
      rating: 5.0,
      students: "800",
      duration: "8 weeks",
      category: "Artificial Intelligence",
      price: "$299",
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="space-y-4">
          <h2 className="text-accent font-bold tracking-widest text-sm uppercase">Course Catalog</h2>
          <h3 className="text-5xl font-headline font-bold">Featured Programs</h3>
        </div>
        <Button variant="outline" className="rounded-full glass border-white/20 h-12 px-8 font-semibold">
          View All Courses
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course) => {
          const courseImg = PlaceHolderImages?.find((img) => img.id === course.id);
          return (
            <Card key={course.id} className="glass-card border-white/5 overflow-hidden group hover:translate-y-[-12px] transition-all duration-500">
              <div className="relative h-56 overflow-hidden">
                {courseImg && (
                  <Image
                    src={courseImg.imageUrl}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={courseImg.imageHint}
                  />
                )}
                <div className="absolute top-5 left-5">
                  <Badge className="bg-primary/80 backdrop-blur-md px-3 py-1 font-bold">{course.category}</Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-accent">
                    <Star className="w-4 h-4 fill-current glow-icon" />
                    <span className="text-sm font-bold">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="text-xs font-semibold">{course.students}</span>
                  </div>
                </div>
                <h4 className="text-2xl font-bold leading-tight group-hover:text-gradient transition-colors duration-300">{course.title}</h4>
                <p className="text-sm text-muted-foreground font-medium italic">by {course.instructor}</p>
              </CardHeader>
              
              <CardContent className="pb-6">
                <div className="flex items-center gap-4 text-muted-foreground text-sm font-semibold">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    {course.duration}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between items-center border-t border-white/5 pt-6 mt-2">
                <span className="text-3xl font-bold text-white">{course.price}</span>
                <Button variant="secondary" className="rounded-full px-8 bg-white/5 hover:bg-accent-gradient transition-all duration-500 hover:text-white font-bold h-11">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}