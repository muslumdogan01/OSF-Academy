const menuIcon = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      height={size}
      width={size}
    >
      <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
    </svg>
  );
};
const menuIconClose = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      height={size}
      width={size}
    >
      <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
    </svg>
  );
};
const rotate = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
    >
      <path d="M468.9 32.11c13.87 0 27.18 10.77 27.18 27.04v145.9c0 10.59-8.584 19.17-19.17 19.17h-145.7c-16.28 0-27.06-13.32-27.06-27.2c0-6.634 2.461-13.4 7.96-18.9l45.12-45.14c-28.22-23.14-63.85-36.64-101.3-36.64c-88.09 0-159.8 71.69-159.8 159.8S167.8 415.9 255.9 415.9c73.14 0 89.44-38.31 115.1-38.31c18.48 0 31.97 15.04 31.97 31.96c0 35.04-81.59 70.41-147 70.41c-123.4 0-223.9-100.5-223.9-223.9S132.6 32.44 256 32.44c54.6 0 106.2 20.39 146.4 55.26l47.6-47.63C455.5 34.57 462.3 32.11 468.9 32.11z" />
    </svg>
  );
};
const heart = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={size}
      width={size}
      fill="#e73c68"
    >
      <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
    </svg>
  );
};
const plus = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      height={size}
      width={size}
      fill="#23c46e"
    >
      <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
    </svg>
  );
};
const dolly = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      width={size}
      height={size}
    >
      <path d="M294.2 277.8c17.1 5 34.62 13.38 49.5 24.62l161.5-53.75c8.375-2.875 12.88-11.88 10-20.25L454.8 47.25c-2.748-8.502-11.88-13-20.12-10.12l-61.13 20.37l33.12 99.38l-60.75 20.13l-33.12-99.38L251.2 98.13c-8.373 2.75-12.87 11.88-9.998 20.12L294.2 277.8zM574.4 309.9c-5.594-16.75-23.67-25.91-40.48-20.23l-202.5 67.51c-17.22-22.01-43.57-36.41-73.54-36.97L165.7 43.75C156.9 17.58 132.5 0 104.9 0H32C14.33 0 0 14.33 0 32s14.33 32 32 32h72.94l92.22 276.7C174.7 358.2 160 385.3 160 416c0 53.02 42.98 96 96 96c52.4 0 94.84-42.03 95.82-94.2l202.3-67.44C570.9 344.8 579.1 326.6 574.4 309.9zM256 448c-17.67 0-32-14.33-32-32c0-17.67 14.33-31.1 32-31.1S288 398.3 288 416C288 433.7 273.7 448 256 448z" />
    </svg>
  );
};
const left = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 512"
      height={size}
      width={size}
    >
      <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
    </svg>
  );
};
const right = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 512"
      height={size}
      width={size}
    >
      <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
    </svg>
  );
};
const metodology = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={size}
      width={size}
    >
      <path d="M257.1 95.53C245.8 95.53 234.7 96.72 223.1 98.97V33.97C234.8 32.36 245.9 31.53 257.1 31.53C315.3 31.53 368.3 53.72 408.2 90.11L437.6 60.69C447.7 50.61 464.9 57.75 464.9 72V177.4C464.9 186.2 457.7 193.4 448.9 193.4H343.5C329.3 193.4 322.1 176.1 332.2 166.1L362.9 135.4C334.7 110.6 297.7 95.53 257.1 95.53L257.1 95.53zM97.14 255.5C97.14 266.7 98.27 277.5 100.4 288H35.47C33.93 277.4 33.14 266.6 33.14 255.5C33.14 198.2 54.71 145.8 90.18 106.2L60.69 76.69C50.61 66.61 57.74 49.38 71.1 49.38H177.4C186.2 49.38 193.4 56.54 193.4 65.38V170.7C193.4 185 176.1 192.1 166.1 182.1L135.5 151.5C111.6 179.5 97.14 215.8 97.14 255.5V255.5zM182.1 348.2L153.1 377.1C181.1 401.1 217.4 415.5 257.1 415.5C267.7 415.5 278 414.5 288 412.6V477.4C277.9 478.8 267.6 479.5 257.1 479.5C199.8 479.5 147.4 457.1 107.8 422.5L76.69 453.6C66.61 463.7 49.37 456.5 49.37 442.3V336.9C49.37 328.1 56.54 320.9 65.37 320.9H170.7C184.1 320.9 192.1 338.1 182.1 348.2H182.1zM348.2 332.2L377.2 361.2C402.1 333.1 417.1 296.1 417.1 255.5C417.1 244.7 416.1 234.2 414 224H478.9C480.4 234.3 481.1 244.8 481.1 255.5C481.1 313.7 458.9 366.7 422.6 406.6L453.6 437.6C463.7 447.7 456.5 464.9 442.3 464.9H336.9C328.1 464.9 320.9 457.7 320.9 448.9V343.5C320.9 329.3 338.1 322.1 348.2 332.2L348.2 332.2z" />
    </svg>
  );
};
const facebook = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      height={size}
      width={size}
    >
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  );
};
const googlePlus = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      height={size}
      width={size}
    >
      <path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z" />
    </svg>
  );
};
const twitter = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={size}
      width={size}
    >
      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
    </svg>
  );
};
const pinterest = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      height={size}
      width={size}
    >
      <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
    </svg>
  );
};
const search = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={size}
      width={size}
    >
      <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
    </svg>
  );
};

const Icon = ({ name, size = 24 }) => {
  const icon = {
    menu: menuIcon,
    menuClose: menuIconClose,
    heart: heart,
    plus: plus,
    rotate: rotate,
    dolly: dolly,
    metodology: metodology,
    left: left,
    right: right,
    facebook: facebook,
    googlePlus: googlePlus,
    twitter: twitter,
    pinterest: pinterest,
    search: search,
  };
  const Component = icon[name];
  return <Component size={size} />;
};

export { Icon };
