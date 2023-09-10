// "use server";
import React from "react";

const AndrewPortrait = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={53}
      height={53}
      fill="none"
      {...props}
    >
      <path fill="url(#a)" d="M0 0h53v53H0z" />
      <defs>
        <pattern
          id="a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#b" transform="matrix(.01828 0 0 .01828 -.085 0)" />
        </pattern>
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANFSURBVHhe7ZhNjtswDIUzAYqugiyKHqX3P0CPUnQRdFUUyNTPEAWa0Q9JUU4G4w8w7FEUku/pL57TwSfnLd1n8Z7uNZBf02ca0cE3Yq7Xa3oqc7vdmn3wuSDcjIiAWXRPsAUSj5hklDAkxIzRIO+RojkV0eFGnNPdQxYviwSlNi+Uh4untoXeHtLEYwASbsRLI3ibBx6nBI+dnt0mWA1YhZfEkehR8QTFqMXi5qQ+LhOs62ez5qXoKPEaSrmSKSZNls5q8bxtBrwOScqp1qXt2BTP2/gz7j++Xda2SH7+/hNmgvsUkIIls8RHozHgYfQBF8+F0ucfQTxwzQApXk7JZ4tPtahOhaYB5/O5uPbpWQql0d8D5OKXF/ceUGOP0UcOfo2gNmDP0d2T5lGBJXC5XDbiS0sAewDA3/TM8YySJU7pWEw1d49C9QyQCTjCCCTdXGgvCSrB+g7F0RKyB4iCS2QBLaLiWGgacL/f01MdVrSGavFRcax0ZwCt/4+yCaLOyFrXd/9lja8Xnpe9ILelzz3k70fF4XWxmN24rRmAQA87b5S7NIWjprKE1d40QbUJ8iJLprwaFlNDToFXwDszn2YAzaSI2TQSp2VAPmpqwVN7d6MRrHsLJyoOQe2p/ubR2psBoT869kRb9/ASMI5eb9SG4wi6P6y6HXC+8g2mlpg5Xoq5CtMU7YlTGm28uyx1jxuwkP8pYjQioxytDZY46JsE55e2VGu8AZTII2oWIwYM7QG//v5LT21Ko9lC21+bv4XGgLfk5gPfv34JN8EiHvlLaEcfqDotrMuAphjufAm0iuFoxGmWlsyHuLK+hXkGAK8Jo9TEg6kGpHtOBqQJPaJmAMHFgyScCDWAyCcC0TOBi5bfLcFF9OKWalkwaRo2AEgTeqLFSK30+sn4jf77GwB4sRYxhMW0Tg3PMaBET3QN67IhXsYAEm4RXYPMMOQ1aRp+G6xB4iGAj6gG/p0IE1tYZwBQzwJevNUEbuCs0QceA4DLBCuzxQOvAWCqCXuIByMGANOmaKUXe1Q8GDUAqEyIJkI8iDAA7GpClHgQZQDYxYRI8SDSADDVhGjxINoAoP3XtocZ9R4cHBwcHBwcHHxCTqf/svBfhG8hcC4AAAAASUVORK5CYII="
          id="b"
          width={64}
          height={64}
        />
      </defs>
    </svg>
  )

export default AndrewPortrait;