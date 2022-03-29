import QRCodeStyling from "qr-code-styling";
import { useEffect, useRef } from "react";

function QRCodeTest({data}) {
  const ref = useRef(null);
  useEffect(() => {
    qrCode.append(ref.current);
    qrCode.update({data: data});
  }, [data]);

  const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    dotsOptions: {
      color: "black",
      type: "dots",
      gradient: {
        type: "linear",
        colorStops: [
          { offset: 0, color: '#A480CF' }, { offset: 0.5, color: '#779BE7' },{ offset: 1, color: '#49B6FF' }
        ]
      }
    },
    cornersSquareOptions:{
      color: "#340068",
      type: "extra-rounded"
    },
    cornersDotOptions:{
      type: "dot"
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 60
    }
  });

  return (
    <div ref={ref}></div>
  );
}

export default QRCodeTest;
