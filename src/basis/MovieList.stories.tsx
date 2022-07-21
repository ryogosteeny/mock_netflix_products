import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MovieList } from "./MovieList";

export default {
  title: "basis/MovieList",
  component: MovieList,
} as ComponentMeta<typeof MovieList>;

const Template: ComponentStory<typeof MovieList> = (args) => (
  <MovieList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "おすすめ",
  movies: [
    {
      id: 1,
      releaseDate: "1月",
      isAdult: false,
      title: "サンプル",
      posterPath: "http://html5.cyberlab.info/elements/embedded/sample-img.png",
    },
    {
      id: 2,
      releaseDate: "1月",
      isAdult: false,
      title: "サンプル",
      posterPath: "http://html5.cyberlab.info/elements/embedded/sample-img.png",
    },
    {
      id: 3,
      releaseDate: "1月",
      isAdult: false,
      title: "サンプル",
      posterPath: "http://html5.cyberlab.info/elements/embedded/sample-img.png",
    },
  ],
};
