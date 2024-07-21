export const EmailVerification = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{contact.SUBJECT | default : ''}}</title>
    <style type="text/css" emogrify="no">
      #outlook a {
        padding: 0;
      }
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      table td {
        border-collapse: collapse;
        mso-line-height-rule: exactly;
      }
      .editable.image {
        font-size: 0 !important;
        line-height: 0 !important;
      }
      .nl2go_preheader {
        display: none !important;
        mso-hide: all !important;
        mso-line-height-rule: exactly;
        visibility: hidden !important;
        line-height: 0px !important;
        font-size: 0px !important;
      }
      body {
        width: 100% !important;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        margin: 0;
        padding: 0;
      }
      img {
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
      a img {
        border: none;
      }
      table {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      th {
        font-weight: normal;
        text-align: left;
      }
      *[class="gmail-fix"] {
        display: none !important;
      }
    </style>
    <style type="text/css" emogrify="no">
      @media (max-width: 600px) {
        .r0-o {
          border-style: solid !important;
          margin: 0 auto 0 auto !important;
          width: 320px !important;
        }
        .r1-i {
          background-color: #f1ede4 !important;
        }
        .r2-c {
          box-sizing: border-box !important;
          text-align: center !important;
          valign: top !important;
          width: 100% !important;
        }
        .r3-o {
          border-style: solid !important;
          margin: 0 auto 0 auto !important;
          width: 100% !important;
        }
        .r4-i {
          background-color: #f1ede4 !important;
          padding-bottom: 20px !important;
          padding-left: 15px !important;
          padding-right: 15px !important;
          padding-top: 20px !important;
        }
        .r5-c {
          box-sizing: border-box !important;
          display: block !important;
          valign: top !important;
          width: 100% !important;
        }
        .r6-o {
          border-style: solid !important;
          width: 100% !important;
        }
        .r7-i {
          padding-bottom: 20px !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
          padding-top: 0px !important;
        }
        .r8-i {
          background-color: #f1ede4 !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
          padding-top: 10px !important;
        }
        .r9-c {
          box-sizing: border-box !important;
          text-align: left !important;
          valign: top !important;
          width: 100% !important;
        }
        .r10-o {
          border-bottom-width: 0px !important;
          border-left-width: 0px !important;
          border-right-width: 0px !important;
          border-style: solid !important;
          border-top-width: 0px !important;
          margin: 0 auto 0 0 !important;
          margin-bottom: 0px !important;
          margin-top: 0px !important;
          width: 100% !important;
        }
        .r11-i {
          padding-top: 0px !important;
          text-align: center !important;
        }
        .r12-i {
          padding-left: 0px !important;
          padding-right: 0px !important;
        }
        .r13-o {
          border-style: solid !important;
          margin: 0 auto 0 0 !important;
          width: 100% !important;
        }
        .r14-i {
          padding-top: 25px !important;
          text-align: center !important;
        }
        .r15-o {
          border-style: solid !important;
          margin: 0 auto 0 0 !important;
          margin-bottom: 15px !important;
          width: 100% !important;
        }
        .r16-i {
          padding-bottom: 0px !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
          padding-top: 0px !important;
          text-align: left !important;
        }
        .r17-i {
          padding-left: 0px !important;
          padding-right: 0px !important;
          padding-top: 0px !important;
        }
        .r18-o {
          border-style: solid !important;
          margin: 0 auto 0 auto !important;
          margin-bottom: 0px !important;
          margin-top: 0px !important;
          width: 100% !important;
        }
        .r19-i {
          text-align: center !important;
        }
        .r20-r {
          background-color: #473a8a !important;
          border-color: #666666 !important;
          border-radius: 8px !important;
          border-width: 0px !important;
          box-sizing: border-box;
          height: initial !important;
          padding-bottom: 12px !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
          padding-top: 12px !important;
          text-align: center !important;
          width: 100% !important;
        }
        .r21-i {
          background-color: #2d3044 !important;
          padding-bottom: 42px !important;
          padding-left: 15px !important;
          padding-right: 15px !important;
          padding-top: 37px !important;
        }
        .r22-c {
          box-sizing: border-box !important;
          padding-top: 20px !important;
          text-align: left !important;
          valign: top !important;
          width: 100% !important;
        }
        .r23-c {
          box-sizing: border-box !important;
          text-align: left !important;
          width: 100% !important;
        }
        .r24-i {
          font-size: 0px !important;
          padding-left: 0px !important;
          padding-right: 164px !important;
          padding-top: 15px !important;
        }
        .r25-c {
          box-sizing: border-box !important;
          width: 32px !important;
        }
        .r26-o {
          border-style: solid !important;
          margin-right: 10px !important;
          width: 32px !important;
        }
        .r27-i {
          padding-bottom: 5px !important;
          padding-top: 5px !important;
        }
        .r28-i {
          padding-left: 0px !important;
          padding-right: 0px !important;
          padding-top: 30px !important;
        }
        body {
          -webkit-text-size-adjust: none;
        }
        .nl2go-responsive-hide {
          display: none;
        }
        .nl2go-body-table {
          min-width: unset !important;
        }
        .mobshow {
          height: auto !important;
          overflow: visible !important;
          max-height: unset !important;
          visibility: visible !important;
          border: none !important;
        }
        .resp-table {
          display: inline-table !important;
        }
        .magic-resp {
          display: table-cell !important;
        }
      }
    </style>
    <!--[if !mso]><!-->
    <style type="text/css" emogrify="no">
      @import url("https://fonts.googleapis.com/css2?family=Vollkorn:wght@700&display=swap");
      @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");
    </style>
    <!--<![endif]-->
    <style type="text/css">
      p,
      h1,
      h2,
      h3,
      h4,
      ol,
      ul,
      li {
        margin: 0;
      }
      a,
      a:link {
        color: #f1ede4;
        text-decoration: none;
      }
      .nl2go-default-textstyle {
        color: #392f65;
        font-family: Trebuchet MS;
        font-size: 16px;
        line-height: 1.5;
        word-break: break-word;
      }
      .default-button {
        color: #ffffff;
        font-family: Trebuchet MS;
        font-size: 16px;
        font-style: normal;
        font-weight: normal;
        line-height: 1.15;
        text-decoration: none;
        word-break: break-word;
      }
      .nl2go_class_14_white_l {
        color: #ffffff;
        font-family: Trebuchet MS;
        font-size: 14px;
        font-weight: 300;
        word-break: break-word;
      }
      .nl2go_class_14_white_reg {
        color: #ffffff;
        font-family: Trebuchet MS;
        font-size: 14px;
        word-break: break-word;
      }
      .nl2go_class_14_white_b {
        color: #ffffff;
        font-family: Trebuchet MS;
        font-size: 14px;
        font-weight: 700;
        word-break: break-word;
      }
      .nl2go_class_16_white_reg_up {
        color: #ffffff;
        font-family: Trebuchet MS;
        font-size: 16px;
        text-transform: uppercase;
        word-break: break-word;
      }
      .nl2go_class_16_blue_reg {
        color: #392f65;
        font-family: Trebuchet MS;
        font-size: 16px;
        word-break: break-word;
      }
      .nl2go_class_24_blue_b {
        color: #392f65;
        font-family: Trebuchet MS;
        font-size: 24px;
        font-weight: 700;
        word-break: break-word;
      }
      .nl2go_class_48_blue_vollkorn_b {
        color: #392f65;
        font-family:
          Vollkorn,
          Georgia,
          Times,
          Times New Roman,
          serif,
          arial;
        font-size: 48px;
        word-break: break-word;
      }
      .nl2go_class_headline {
        color: #677876;
        font-family: Trebuchet MS;
        font-size: 26px;
        word-break: break-word;
      }
      .nl2go_class_impressum {
        color: #999999;
        font-family: Trebuchet MS;
        font-size: 12px;
        font-style: italic;
        word-break: break-word;
      }
      .default-heading1 {
        color: #392f65;
        font-family: Tahoma;
        font-size: 48px;
        word-break: break-word;
      }
      .default-heading2 {
        color: #392f65;
        font-family: Tahoma;
        font-size: 24px;
        word-break: break-word;
      }
      .default-heading3 {
        color: #f1ede4;
        font-family: Tahoma;
        font-size: 20px;
        word-break: break-word;
      }
      .default-heading4 {
        color: #f1ede4;
        font-family: Tahoma;
        font-size: 18px;
        word-break: break-word;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .no-show-for-you {
        border: none;
        display: none;
        float: none;
        font-size: 0;
        height: 0;
        line-height: 0;
        max-height: 0;
        mso-hide: all;
        overflow: hidden;
        table-layout: fixed;
        visibility: hidden;
        width: 0;
      }
    </style>
    <!--[if mso
      ]><xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG /> <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml><!
    [endif]-->
    <style type="text/css">
      a:link {
        color: #f1ede4;
        text-decoration: none;
      }
    </style>
  </head>
  <body
    bgcolor="#f1ede4"
    text="#392f65"
    link="#f1ede4"
    yahoo="fix"
    style="background-color: #f1ede4; padding-bottom: 0px; padding-top: 0px"
  >
    <table
      cellspacing="0"
      cellpadding="0"
      border="0"
      role="presentation"
      class="nl2go-body-table"
      width="100%"
      style="background-color: #f1ede4; width: 100%"
    >
      <tr>
        <td>
          <table
            cellspacing="0"
            cellpadding="0"
            border="0"
            role="presentation"
            width="600"
            align="center"
            class="r0-o"
            style="table-layout: fixed; width: 600px"
          >
            <tr>
              <td valign="top" class="r1-i" style="background-color: #f1ede4">
                <table
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  role="presentation"
                  width="100%"
                  align="center"
                  class="r3-o"
                  style="table-layout: fixed; width: 100%"
                >
                  <tr>
                    <td
                      class="r4-i"
                      style="
                        background-color: #f1ede4;
                        padding-bottom: 20px;
                        padding-top: 20px;
                      "
                    >
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                      >
                        <tr>
                          <th
                            width="50%"
                            valign="top"
                            class="r5-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              class="r6-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  valign="top"
                                  class="r7-i"
                                  style="
                                    padding-left: 15px;
                                    padding-right: 15px;
                                  "
                                >
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                    border="0"
                                    role="presentation"
                                  >
                                    <tr>
                                      <td class="r2-c" align="center">
                                        <table
                                          cellspacing="0"
                                          cellpadding="0"
                                          border="0"
                                          role="presentation"
                                          width="200"
                                          class="r3-o"
                                          style="
                                            table-layout: fixed;
                                            width: 200px;
                                          "
                                        >
                                          <tr>
                                            <td
                                              style="
                                                font-size: 0px;
                                                line-height: 0px;
                                              "
                                            >
                                              <img
                                                src="https://img.mailinblue.com/7932192/images/content_library/original/669c1a4ffbf000227e97ff0a.jpeg"
                                                width="200"
                                                border="0"
                                                style="
                                                  display: block;
                                                  width: 100%;
                                                "
                                              />
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                          <th
                            width="50%"
                            valign="top"
                            class="r5-c"
                            style="
                              background-color: #f1ede4;
                              font-weight: normal;
                            "
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              class="r6-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  valign="top"
                                  class="r8-i"
                                  style="
                                    background-color: #f1ede4;
                                    padding-left: 15px;
                                    padding-right: 15px;
                                    padding-top: 10px;
                                  "
                                >
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                    border="0"
                                    role="presentation"
                                  >
                                    <tr>
                                      <td class="r9-c" align="left">
                                        <table
                                          cellspacing="0"
                                          cellpadding="0"
                                          border="0"
                                          role="presentation"
                                          width="100%"
                                          class="r10-o"
                                          style="
                                            table-layout: fixed;
                                            width: 100%;
                                          "
                                        >
                                          <tr>
                                            <td
                                              align="center"
                                              valign="top"
                                              class="r11-i nl2go-default-textstyle"
                                              style="
                                                color: #392f65;
                                                font-family: Trebuchet MS;
                                                font-size: 16px;
                                                word-break: break-word;
                                                line-height: 2;
                                                text-align: center;
                                              "
                                            >
                                              <div>
                                                <h2
                                                  class="default-heading2"
                                                  style="
                                                    margin: 0;
                                                    color: #392f65;
                                                    font-family: Tahoma;
                                                    font-size: 24px;
                                                    word-break: break-word;
                                                    text-align: center;
                                                  "
                                                >
                                                  <span style="font-size: 28px"
                                                    >Unlock the Benefits of
                                                    Eventor App Today!</span
                                                  >
                                                </h2>
                                              </div>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  role="presentation"
                  width="100%"
                  align="center"
                  class="r3-o"
                  style="table-layout: fixed; width: 100%"
                >
                  <tr>
                    <td
                      class="r4-i"
                      style="
                        background-color: #f1ede4;
                        padding-bottom: 20px;
                        padding-top: 20px;
                      "
                    >
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                      >
                        <tr>
                          <th
                            width="100%"
                            valign="top"
                            class="r5-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              class="r6-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  valign="top"
                                  class="r12-i"
                                  style="
                                    padding-left: 15px;
                                    padding-right: 15px;
                                  "
                                >
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                    border="0"
                                    role="presentation"
                                  >
                                    <tr>
                                      <td class="r9-c" align="left">
                                        <table
                                          cellspacing="0"
                                          cellpadding="0"
                                          border="0"
                                          role="presentation"
                                          width="100%"
                                          class="r13-o"
                                          style="
                                            table-layout: fixed;
                                            width: 100%;
                                          "
                                        >
                                          <tr>
                                            <td
                                              align="center"
                                              valign="top"
                                              class="r14-i nl2go-default-textstyle"
                                              style="
                                                color: #392f65;
                                                font-family: Trebuchet MS;
                                                font-size: 16px;
                                                line-height: 1.5;
                                                word-break: break-word;
                                                padding-top: 25px;
                                                text-align: center;
                                              "
                                            >
                                              <div>
                                                <h2
                                                  class="default-heading2"
                                                  style="
                                                    margin: 0;
                                                    color: #392f65;
                                                    font-family: Tahoma;
                                                    font-size: 24px;
                                                    word-break: break-word;
                                                  "
                                                >
                                                  <span style="font-size: 19px"
                                                    >Dear </span
                                                  >{{ CONTACT.FIRST_NAME }} {{
                                                  VERIFICATION.LAST_NAME }}
                                                </h2>
                                              </div>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  role="presentation"
                  width="100%"
                  align="center"
                  class="r3-o"
                  style="table-layout: fixed; width: 100%"
                >
                  <tr>
                    <td
                      class="r4-i"
                      style="
                        background-color: #f1ede4;
                        padding-bottom: 20px;
                        padding-top: 20px;
                      "
                    >
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                      >
                        <tr>
                          <th
                            width="100%"
                            valign="top"
                            class="r5-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              class="r6-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  valign="top"
                                  class="r12-i"
                                  style="
                                    padding-left: 15px;
                                    padding-right: 15px;
                                  "
                                >
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                    border="0"
                                    role="presentation"
                                  >
                                    <tr>
                                      <td class="r9-c" align="left">
                                        <table
                                          cellspacing="0"
                                          cellpadding="0"
                                          border="0"
                                          role="presentation"
                                          width="100%"
                                          class="r15-o"
                                          style="
                                            table-layout: fixed;
                                            width: 100%;
                                          "
                                        >
                                          <tr>
                                            <td
                                              align="left"
                                              valign="top"
                                              class="r16-i nl2go-default-textstyle"
                                              style="
                                                color: #392f65;
                                                font-family: Trebuchet MS;
                                                font-size: 16px;
                                                line-height: 1.5;
                                                word-break: break-word;
                                                text-align: left;
                                              "
                                            >
                                              <div>
                                                <p style="margin: 0">
                                                  Thank you for signing up! To
                                                  complete your registration and
                                                  verify your email address,
                                                  please click the link below.
                                                  This step ensures that we have
                                                  the correct contact
                                                  information and allows you to
                                                  fully access all the features
                                                  and benefits of our service.
                                                  We take your privacy seriously
                                                  and want to make sure your
                                                  information is secure. If you
                                                  did not sign up for this
                                                  account, please ignore this
                                                  email. If you have any
                                                  questions or need assistance,
                                                  our support team is ready to
                                                  help. Welcome to our
                                                  community!
                                                </p>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr class="nl2go-responsive-hide">
                                            <td
                                              height="15"
                                              style="
                                                font-size: 15px;
                                                line-height: 15px;
                                              "
                                            >
                                              ­
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  role="presentation"
                  width="100%"
                  align="center"
                  class="r3-o"
                  style="table-layout: fixed; width: 100%"
                >
                  <tr>
                    <td
                      class="r4-i"
                      style="
                        background-color: #f1ede4;
                        padding-bottom: 20px;
                        padding-top: 20px;
                      "
                    >
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                      >
                        <tr>
                          <th
                            width="100%"
                            valign="top"
                            class="r5-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              class="r6-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  valign="top"
                                  class="r17-i"
                                  style="
                                    padding-left: 15px;
                                    padding-right: 15px;
                                  "
                                >
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                    border="0"
                                    role="presentation"
                                  >
                                    <tr>
                                      <td class="r2-c" align="center">
                                        <table
                                          cellspacing="0"
                                          cellpadding="0"
                                          border="0"
                                          role="presentation"
                                          width="570"
                                          class="r18-o"
                                          style="
                                            table-layout: fixed;
                                            width: 570px;
                                          "
                                        >
                                          <tr>
                                            <td
                                              height="18"
                                              align="center"
                                              valign="top"
                                              class="r19-i nl2go-default-textstyle"
                                              style="
                                                color: #392f65;
                                                font-family: Trebuchet MS;
                                                font-size: 16px;
                                                line-height: 1.5;
                                                word-break: break-word;
                                              "
                                            >
                                              <!--[if mso]>
                                                <v:roundrect
                                                  xmlns:v="urn:schemas-microsoft-com:vml"
                                                  xmlns:w="urn:schemas-microsoft-com:office:word"
                                                  href="#top"
                                                  style="
                                                    v-text-anchor: middle;
                                                    height: 41px;
                                                    width: 569px;
                                                  "
                                                  arcsize="20%"
                                                  fillcolor="#473a8a"
                                                  strokecolor="#473a8a"
                                                  strokeweight="1px"
                                                  data-btn="1"
                                                >
                                                  <w:anchorlock> </w:anchorlock>
                                                  <v:textbox inset="0,0,0,0">
                                                    <div style="display: none">
                                                      <center
                                                        class="default-button"
                                                      >
                                                        <span
                                                          >{{
                                                          VERIFICATION.VERIFICATIONCODE
                                                          }}</span
                                                        >
                                                      </center>
                                                    </div>
                                                  </v:textbox>
                                                </v:roundrect>
                                              <![endif]-->
                                              <!--[if !mso]><!-- -->
                                              <a
                                                href="#top"
                                                class="r20-r default-button"
                                                target="_blank"
                                                data-btn="1"
                                                style="
                                                  font-style: normal;
                                                  font-weight: normal;
                                                  line-height: 1.15;
                                                  text-decoration: none;
                                                  word-break: break-word;
                                                  border-style: solid;
                                                  word-wrap: break-word;
                                                  display: block;
                                                  -webkit-text-size-adjust: none;
                                                  background-color: #473a8a;
                                                  border-color: #666666;
                                                  border-radius: 8px;
                                                  border-width: 0px;
                                                  color: #ffffff;
                                                  font-family: Trebuchet MS;
                                                  font-size: 16px;
                                                  height: 18px;
                                                  mso-hide: all;
                                                  padding-bottom: 12px;
                                                  padding-left: 0px;
                                                  padding-right: 0px;
                                                  padding-top: 12px;
                                                  width: 570px;
                                                "
                                              >
                                                <span
                                                  >{{
                                                  VERIFICATION.VERIFICATIONCODE
                                                  }}</span
                                                ></a
                                              >
                                              <!--<![endif]-->
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  role="presentation"
                  width="100%"
                  align="center"
                  class="r3-o"
                  style="table-layout: fixed; width: 100%"
                >
                  <tr>
                    <td
                      class="r21-i"
                      style="
                        background-color: #2d3044;
                        padding-bottom: 42px;
                        padding-left: 59px;
                        padding-right: 58px;
                        padding-top: 37px;
                      "
                    >
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                      >
                        <tr>
                          <th
                            width="66.67%"
                            valign="top"
                            class="r5-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              class="r6-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td valign="top" class="r12-i">
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                    border="0"
                                    role="presentation"
                                  >
                                    <tr>
                                      <td
                                        class="r9-c nl2go-default-textstyle"
                                        align="left"
                                        style="
                                          color: #392f65;
                                          font-family: Trebuchet MS;
                                          font-size: 16px;
                                          line-height: 1.5;
                                          word-break: break-word;
                                          text-align: left;
                                          valign: top;
                                        "
                                      >
                                        <div>
                                          <div
                                            class="nl2go_class_14_white_b"
                                            style="
                                              color: #fff;
                                              font-family: Trebuchet MS;
                                              font-size: 14px;
                                              font-weight: 700;
                                              word-break: break-word;
                                            "
                                          >
                                            Eventor
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        class="r9-c nl2go-default-textstyle"
                                        align="left"
                                        style="
                                          color: #392f65;
                                          font-family: Trebuchet MS;
                                          font-size: 16px;
                                          line-height: 1.5;
                                          word-break: break-word;
                                          text-align: left;
                                          valign: top;
                                        "
                                      >
                                        <div>
                                          <div
                                            class="nl2go_class_14_white_l"
                                            style="
                                              color: #fff;
                                              font-family: Trebuchet MS;
                                              font-size: 14px;
                                              font-weight: 300;
                                              word-break: break-word;
                                            "
                                          >
                                            Sonia Colony
                                          </div>
                                          <div
                                            class="nl2go_class_14_white_l"
                                            style="
                                              color: #fff;
                                              font-family: Trebuchet MS;
                                              font-size: 14px;
                                              font-weight: 300;
                                              word-break: break-word;
                                            "
                                          >
                                            134003 Ambala City<br /><a
                                              href="http://"
                                              style="
                                                color: #f1ede4;
                                                text-decoration: none;
                                              "
                                              >info@ivaaninformationtechnolog.com</a
                                            >
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        class="r22-c nl2go-default-textstyle"
                                        align="left"
                                        style="
                                          color: #392f65;
                                          font-family: Trebuchet MS;
                                          font-size: 16px;
                                          line-height: 1.5;
                                          word-break: break-word;
                                          padding-top: 7px;
                                          text-align: left;
                                          valign: top;
                                        "
                                      >
                                        <div>
                                          <div
                                            class="nl2go_class_14_white_b"
                                            style="
                                              color: #fff;
                                              font-family: Trebuchet MS;
                                              font-size: 14px;
                                              font-weight: 700;
                                              word-break: break-word;
                                            "
                                          >
                                            Find us
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="r23-c" align="left">
                                        <table
                                          cellspacing="0"
                                          cellpadding="0"
                                          border="0"
                                          role="presentation"
                                          width="322"
                                          align="left"
                                          class="r13-o"
                                          style="
                                            table-layout: fixed;
                                            width: 322px;
                                          "
                                        >
                                          <tr>
                                            <td valign="top">
                                              <table
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                                role="presentation"
                                              >
                                                <tr>
                                                  <td
                                                    class="r23-c"
                                                    align="left"
                                                    style="
                                                      display: inline-block;
                                                    "
                                                  >
                                                    <table
                                                      cellspacing="0"
                                                      cellpadding="0"
                                                      border="0"
                                                      role="presentation"
                                                      width="322"
                                                      align="left"
                                                      class="r13-o"
                                                      style="
                                                        table-layout: fixed;
                                                        width: 322px;
                                                      "
                                                    >
                                                      <tr>
                                                        <td
                                                          class="r24-i"
                                                          style="
                                                            padding-right: 196px;
                                                            padding-top: 15px;
                                                          "
                                                        >
                                                          <table
                                                            width="100%"
                                                            cellspacing="0"
                                                            cellpadding="0"
                                                            border="0"
                                                            role="presentation"
                                                          >
                                                            <tr>
                                                              <th
                                                                width="42"
                                                                class="r25-c mobshow resp-table"
                                                                style="
                                                                  font-weight: normal;
                                                                "
                                                              >
                                                                <table
                                                                  cellspacing="0"
                                                                  cellpadding="0"
                                                                  border="0"
                                                                  role="presentation"
                                                                  width="100%"
                                                                  class="r26-o"
                                                                  style="
                                                                    table-layout: fixed;
                                                                    width: 100%;
                                                                  "
                                                                >
                                                                  <tr>
                                                                    <td
                                                                      class="r27-i"
                                                                      style="
                                                                        font-size: 0px;
                                                                        line-height: 0px;
                                                                        padding-bottom: 5px;
                                                                        padding-top: 5px;
                                                                      "
                                                                    >
                                                                      <img
                                                                        src="https://creative-assets.mailinblue.com/editor/social-icons/original_light/facebook_32px.png"
                                                                        width="32"
                                                                        border="0"
                                                                        style="
                                                                          display: block;
                                                                          width: 100%;
                                                                        "
                                                                      />
                                                                    </td>
                                                                    <td
                                                                      class="nl2go-responsive-hide"
                                                                      width="10"
                                                                      style="
                                                                        font-size: 0px;
                                                                        line-height: 1px;
                                                                      "
                                                                    >
                                                                      ­
                                                                    </td>
                                                                  </tr>
                                                                </table>
                                                              </th>
                                                              <th
                                                                width="42"
                                                                class="r25-c mobshow resp-table"
                                                                style="
                                                                  font-weight: normal;
                                                                "
                                                              >
                                                                <table
                                                                  cellspacing="0"
                                                                  cellpadding="0"
                                                                  border="0"
                                                                  role="presentation"
                                                                  width="100%"
                                                                  class="r26-o"
                                                                  style="
                                                                    table-layout: fixed;
                                                                    width: 100%;
                                                                  "
                                                                >
                                                                  <tr>
                                                                    <td
                                                                      class="r27-i"
                                                                      style="
                                                                        font-size: 0px;
                                                                        line-height: 0px;
                                                                        padding-bottom: 5px;
                                                                        padding-top: 5px;
                                                                      "
                                                                    >
                                                                      <img
                                                                        src="https://creative-assets.mailinblue.com/editor/social-icons/original_light/instagram_32px.png"
                                                                        width="32"
                                                                        border="0"
                                                                        style="
                                                                          display: block;
                                                                          width: 100%;
                                                                        "
                                                                      />
                                                                    </td>
                                                                    <td
                                                                      class="nl2go-responsive-hide"
                                                                      width="10"
                                                                      style="
                                                                        font-size: 0px;
                                                                        line-height: 1px;
                                                                      "
                                                                    >
                                                                      ­
                                                                    </td>
                                                                  </tr>
                                                                </table>
                                                              </th>
                                                              <th
                                                                width="42"
                                                                class="r25-c mobshow resp-table"
                                                                style="
                                                                  font-weight: normal;
                                                                "
                                                              >
                                                                <table
                                                                  cellspacing="0"
                                                                  cellpadding="0"
                                                                  border="0"
                                                                  role="presentation"
                                                                  width="100%"
                                                                  class="r26-o"
                                                                  style="
                                                                    table-layout: fixed;
                                                                    width: 100%;
                                                                  "
                                                                >
                                                                  <tr>
                                                                    <td
                                                                      class="r27-i"
                                                                      style="
                                                                        font-size: 0px;
                                                                        line-height: 0px;
                                                                        padding-bottom: 5px;
                                                                        padding-top: 5px;
                                                                      "
                                                                    >
                                                                      <img
                                                                        src="https://creative-assets.mailinblue.com/editor/social-icons/original_light/twitter_32px.png"
                                                                        width="32"
                                                                        border="0"
                                                                        style="
                                                                          display: block;
                                                                          width: 100%;
                                                                        "
                                                                      />
                                                                    </td>
                                                                    <td
                                                                      class="nl2go-responsive-hide"
                                                                      width="10"
                                                                      style="
                                                                        font-size: 0px;
                                                                        line-height: 1px;
                                                                      "
                                                                    >
                                                                      ­
                                                                    </td>
                                                                  </tr>
                                                                </table>
                                                              </th>
                                                            </tr>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                          <th
                            width="33.33%"
                            valign="top"
                            class="r5-c"
                            style="font-weight: normal"
                          >
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              class="r6-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td valign="top" class="r28-i">
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                    border="0"
                                    role="presentation"
                                  >
                                    <tr>
                                      <td
                                        class="r9-c nl2go-default-textstyle"
                                        align="left"
                                        style="
                                          color: #392f65;
                                          font-family: Trebuchet MS;
                                          font-size: 16px;
                                          line-height: 1.5;
                                          word-break: break-word;
                                          text-align: left;
                                          valign: top;
                                        "
                                      >
                                        <div>
                                          <div
                                            class="nl2go_class_14_white_l"
                                            style="
                                              color: #fff;
                                              font-family: Trebuchet MS;
                                              font-size: 14px;
                                              font-weight: 300;
                                              word-break: break-word;
                                            "
                                          >
                                            <a
                                              href="http://"
                                              style="
                                                color: #f1ede4;
                                                text-decoration: none;
                                              "
                                              >Privacy</a
                                            ><br /><a
                                              href="http://"
                                              style="
                                                color: #f1ede4;
                                                text-decoration: none;
                                              "
                                              >Imprint</a
                                            ><br /><a
                                              href="{{ unsubscribe }}"
                                              style="
                                                color: #f1ede4;
                                                text-decoration: none;
                                              "
                                              >Unsubscribe</a
                                            >
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
