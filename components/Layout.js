import Head from 'next/head'

export default ({ children, className, desaturate = false }) => (
  <div className={`container ${className} lato ${desaturate && 'desaturate'}`}>
    <Head>
      <title key='title'>Become a Catgirl</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='stylesheet' key='norm' href='https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/0.5.0/modern-normalize.min.css' integrity='sha256-N6+kUxTWxpqVK+BrPWt3t4jeOWPtp37RZEbm5n9X+8U=' crossorigin='anonymous' />
      <link rel='stylesheet' key='tachyons' href='https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.11.1/tachyons.min.css' />
      <link rel='stylesheet' key='fonts' href='https://fonts.googleapis.com/css?family=Lato' />
      <script type='text/nya'>nyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanya</script>
    </Head>
    <style global jsx>{`
      :root {
        --bg-g1: #ddd;
        --bg-g2: #fff;
        --bg-y: #ffffd7;
        --bg-p: #ffd7d7;
        --bg-b: #d7ffff;
      }
      .container::after {
        position: absolute;
        top: 0; right: 0; left: 0; bottom: 0;
        content: " ";
        z-index: -100;
        background-color: #dc8484;
        background: linear-gradient(45deg, #dc8484 0%, #ffd7d7 20%, #ffd7d7 80%, #ff9b9b 100%) no-repeat;
        background: repeating-linear-gradient(
          45deg,
          var(--bg-y),
          var(--bg-y) 40px,
          var(--bg-b) 40px,
          var(--bg-b) 80px,
          var(--bg-p) 80px,
          var(--bg-p) 120px
        );
        transition: filter 2s ease-in-out;
        background-size: cover;
        height: 100vh;
        width: 100vw;
        filter: saturate(1);
      }

      .container.desaturate::after {
        filter: saturate(0);
      }


      .lato {
        font-family: 'avenir next', avenir, Lato, sans-serif;
      }

      .bg-cr-dark {
        background-color: #002626
      }
      .bg-cr-light {
        background-color: rgba(253,253,255)
      }
      .fullheight {
        height: 100vh;
      }
    `}</style>
    <style />
    {children}
  </div>
)
