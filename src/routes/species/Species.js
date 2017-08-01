import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export const Species = ({match}) => {
  console.log(match);
  return (
      <div id="content" className="view details">
        <h1 className="page_header">Infraspecific Taxon Details : <i>Picea abies </i>var.<i> abies</i></h1>
        <div className="wrapLogo">
          <Link to="/details/database/id/45">
            <img src="/images/databases/Conifer_Database.png" alt="Conifer Database" title="Conifer Database"/>
          </Link>
        </div>
        <p className="preface">You selected <i>Abies abies</i> (L.) Rusby. This is a synonym for:</p>
        <table className="details-table">
          <tr className="even">
            <th className="vertical">Accepted scientific name:</th>
            <td>
              <table>
                <tr>
                  <td><i>Picea abies </i>var.<i> abies</i>  (accepted name)</td>
                  <td />
                </tr>
              </table>
            </td>
          </tr>

          <tr className="odd">
            <th className="vertical">Synonyms:</th>
            <td>
              <table>
                <tr>
                  <td><i>Abies abies</i> (L.) Rusby (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18161239"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Abies abies (L.) Rusby"
                        title="1 literature reference for Abies abies (L.) Rusby"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Abies alpestris</i> Brügger (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18159004"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Abies alpestris Brügger"
                        title="1 literature reference for Abies alpestris Brügger"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Abies cinerea</i> Borkh. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18159023"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Abies cinerea Borkh."
                        title="1 literature reference for Abies cinerea Borkh."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Abies erythrocarpa</i> Purk. ex Nyman (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18159026"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Abies erythrocarpa Purk. ex Nyman"
                        title="1 literature reference for Abies erythrocarpa Purk. ex Nyman"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Abies excelsa</i> (Lam.) Poir. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18161218"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Abies excelsa (Lam.) Poir."
                        title="1 literature reference for Abies excelsa (Lam.) Poir."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Abies excelsa</i> var. <i>communis</i> Loudon (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18160531"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Abies excelsa var. communis Loudon"
                        title="1 literature reference for Abies excelsa var. communis Loudon"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Abies excelsa</i> var. <i>nigra</i> Loudon (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18160544"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Abies excelsa var. nigra Loudon"
                        title="1 literature reference for Abies excelsa var. nigra Loudon"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Abies excelsa</i> var. <i>viminalis</i> (Alstr.) Lindl. & Gordon (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18161977"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Abies excelsa var. viminalis (Alstr.) Lindl. & Gordon"
                        title="1 literature reference for Abies excelsa var. viminalis (Alstr.) Lindl. & Gordon"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Abies excelsa</i> var. <i>vulgaris</i> Willk. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18160535"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Abies excelsa var. vulgaris Willk."
                        title="1 literature reference for Abies excelsa var. vulgaris Willk."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Abies extrema</i> Th. Fr. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18159028"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Abies extrema Th. Fr."
                        title="1 literature reference for Abies extrema Th. Fr."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Abies medioxima</i> Lawson (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18159052"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Abies medioxima Lawson"
                        title="1 literature reference for Abies medioxima Lawson"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Abies montana</i> Nyman (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18159054"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Abies montana Nyman"
                        title="1 literature reference for Abies montana Nyman"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Abies pectinata</i> Gilib. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18160530"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Abies pectinata Gilib."
                        title="1 literature reference for Abies pectinata Gilib."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Abies picea</i> Mill. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18161232"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Abies picea Mill."
                        title="1 literature reference for Abies picea Mill."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Abies subarctica</i> (Schur) Nyman (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18161236"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Abies subarctica (Schur) Nyman"
                        title="1 literature reference for Abies subarctica (Schur) Nyman"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Abies vulgaris</i> Wender. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18160533"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Abies vulgaris Wender."
                        title="1 literature reference for Abies vulgaris Wender."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea abies</i> var. <i>alpestris</i> (Brügger) P.A. Schmidt (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18161454"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea abies var. alpestris (Brügger) P.A. Schmidt"
                        title="1 literature reference for Picea abies var. alpestris (Brügger) P.A. Schmidt"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea abies</i> var. <i>germanica</i> Lindq. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18159598"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea abies var. germanica Lindq."
                        title="1 literature reference for Picea abies var. germanica Lindq."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea alpestris</i> (Brügger) Stein (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18161428"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea alpestris (Brügger) Stein"
                        title="1 literature reference for Picea alpestris (Brügger) Stein"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea excelsa</i> (Lam.) Link (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18161439"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea excelsa (Lam.) Link"
                        title="1 literature reference for Picea excelsa (Lam.) Link"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea excelsa</i> var. <i>alpestris</i> (Brügger) Beissn. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18161924"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea excelsa var. alpestris (Brügger) Beissn."
                        title="1 literature reference for Picea excelsa var. alpestris (Brügger) Beissn."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea excelsa</i> var. <i>chlorocarpa</i> Purk. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18159629"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea excelsa var. chlorocarpa Purk."
                        title="1 literature reference for Picea excelsa var. chlorocarpa Purk."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea excelsa</i> var. <i>erythrocarpa</i> Purk. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18159628"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea excelsa var. erythrocarpa Purk."
                        title="1 literature reference for Picea excelsa var. erythrocarpa Purk."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea excelsa</i> var. <i>europaea</i> (Tepl.) Schröt. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18160523"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea excelsa var. europaea (Tepl.) Schröt."
                        title="1 literature reference for Picea excelsa var. europaea (Tepl.) Schröt."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea excelsa</i> var. <i>integrisquamis</i> Carrière (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18159613"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea excelsa var. integrisquamis Carrière"
                        title="1 literature reference for Picea excelsa var. integrisquamis Carrière"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea excelsa</i> var. <i>nigra</i> (Loudon) Willk. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18161932"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea excelsa var. nigra (Loudon) Willk."
                        title="1 literature reference for Picea excelsa var. nigra (Loudon) Willk."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea excelsa</i> var. <i>viminalis</i> (Alstr.) Casp. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18161975"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea excelsa var. viminalis (Alstr.) Casp."
                        title="1 literature reference for Picea excelsa var. viminalis (Alstr.) Casp."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea integrisquamis</i> (Carrière) Chiov. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18161461"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea integrisquamis (Carrière) Chiov."
                        title="1 literature reference for Picea integrisquamis (Carrière) Chiov."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea montana</i> Schur (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18159548"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea montana Schur"
                        title="1 literature reference for Picea montana Schur"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea obovata</i> var. <i>alpestris</i> (Brügger) A. Henry (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18161923"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea obovata var. alpestris (Brügger) A. Henry"
                        title="1 literature reference for Picea obovata var. alpestris (Brügger) A. Henry"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea rubra</i> A. Dietr. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18159554"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea rubra A. Dietr."
                        title="1 literature reference for Picea rubra A. Dietr."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea subarctica</i> Schur (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18159556"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea subarctica Schur"
                        title="1 literature reference for Picea subarctica Schur"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea vulgaris</i> Link (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18159559"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea vulgaris Link"
                        title="1 literature reference for Picea vulgaris Link"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea vulgaris</i> var. <i>chlorocarpa</i> (Purk.) Jacobasch (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18161930"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea vulgaris var. chlorocarpa (Purk.) Jacobasch"
                        title="1 literature reference for Picea vulgaris var. chlorocarpa (Purk.) Jacobasch"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea vulgaris</i> var. <i>erythrocarpa</i> (Purk.) Jacobasch (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18161929"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea vulgaris var. erythrocarpa (Purk.) Jacobasch"
                        title="1 literature reference for Picea vulgaris var. erythrocarpa (Purk.) Jacobasch"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea vulgaris</i> var. <i>europaea</i> Tepl. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18159622"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea vulgaris var. europaea Tepl."
                        title="1 literature reference for Picea vulgaris var. europaea Tepl."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Picea vulgaris</i> var. <i>viminalis</i> (Alstr.) Casp. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18161976"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Picea vulgaris var. viminalis (Alstr.) Casp."
                        title="1 literature reference for Picea vulgaris var. viminalis (Alstr.) Casp."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Pinus abies</i> L. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18159678"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Pinus abies L."
                        title="1 literature reference for Pinus abies L."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Pinus abies</i> var. <i>viminalis</i> (Alstr.) Lilj. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18161973"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Pinus abies var. viminalis (Alstr.) Lilj."
                        title="1 literature reference for Pinus abies var. viminalis (Alstr.) Lilj."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Pinus abies</i> subsp. <i>vulgaris</i> Voss (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18160534"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Pinus abies subsp. vulgaris Voss"
                        title="1 literature reference for Pinus abies subsp. vulgaris Voss"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Pinus excelsa</i> Lam. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18159718"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Pinus excelsa Lam."
                        title="1 literature reference for Pinus excelsa Lam."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Pinus picea</i> Du Roi (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18159800"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Pinus picea Du Roi"
                        title="1 literature reference for Pinus picea Du Roi"/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Pinus picea</i> var. <i>carpatica</i> (Loudon) Endl. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18160070"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Pinus picea var. carpatica (Loudon) Endl."
                        title="1 literature reference for Pinus picea var. carpatica (Loudon) Endl."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Pinus picea</i> var. <i>nigra</i> (Loudon) Endl. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18161931"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Pinus picea var. nigra (Loudon) Endl."
                        title="1 literature reference for Pinus picea var. nigra (Loudon) Endl."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Pinus picea</i> var. <i>viminalis</i> (Alstr.) Endl. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18161974"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Pinus picea var. viminalis (Alstr.) Endl."
                        title="1 literature reference for Pinus picea var. viminalis (Alstr.) Endl."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Pinus picea</i> var. <i>vulgaris</i> Loudon ex Endl. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18160532"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Pinus picea var. vulgaris Loudon ex Endl."
                        title="1 literature reference for Pinus picea var. vulgaris Loudon ex Endl."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Pinus pyramidalis</i> Salisb. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18161530"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Pinus pyramidalis Salisb."
                        title="1 literature reference for Pinus pyramidalis Salisb."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Pinus sativa</i> Lam. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18159819"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Pinus sativa Lam."
                        title="1 literature reference for Pinus sativa Lam."/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td><i>Pinus viminalis</i> Alstr. (synonym)                        </td>
                  <td align="right">
                    <Link to="/details/reference/synonym/18159841"><img
                        src="/images/book.gif"
                        alt="1 literature reference for Pinus viminalis Alstr."
                        title="1 literature reference for Pinus viminalis Alstr."/>
                    </Link>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr className="even">
            <th className="vertical">Common names:</th>
            <td>-</td>
          </tr>
          <tr className="odd">
            <th className="vertical">Classification:</th>
            <td>            <table id="taxonomic-classification">
              <tr>
                <td className="rank">Kingdom</td>
                <td className="taxon">
                  <Link to="" >Plantae</Link>
                  <Link to="/browse/tree/id/208cf441fe2e1662376a9ce9e80782e1">Plantae</Link>
                </td>
                <td className="rank">
                  CoL                        </td>
                <td>
                  <div className="lsid-selector collapsed">
                    <div className="lsid-selector-wrapper" onclick="javascript:switchLSIDSelector(this.parentNode)">
                      <div className="lsid-selector-label">LSID</div>
                      <div className="lsid-selector-icon"></div>
                    </div>
                    <span className="lsid-uri">urn:lsid:catalogueoflife.org:taxon:0aa9c825-d35f-11e6-9d3f-bc764e092680:col20170308</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="rank">Phylum</td>
                <td className="taxon">
                  <Link to="/browse/tree/id/73328ba4e1446e1ee3602956b66eb127">Tracheophyta</Link>
                </td>
                <td className="rank">
                  CoL                        </td>
                <td>
                  <div className="lsid-selector collapsed">
                    <div className="lsid-selector-wrapper" onclick="javascript:switchLSIDSelector(this.parentNode)">
                      <div className="lsid-selector-label">LSID</div>
                      <div className="lsid-selector-icon"></div>
                    </div>
                    <span className="lsid-uri">urn:lsid:catalogueoflife.org:taxon:0aa9c825-d35f-11e6-9d3f-bc764e092680:col20170308</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="rank">Class</td>
                <td className="taxon">
                  <Link to="/browse/tree/id/b60c43b274b1d5f46c8c900add799766">Pinopsida</Link>
                </td>
                <td className="rank">
                  <Link to="/details/database/id/45">Conifer Database</Link>                        </td>
                <td>
                  <div className="lsid-selector collapsed">
                    <div className="lsid-selector-wrapper" onclick="javascript:switchLSIDSelector(this.parentNode)">
                      <div className="lsid-selector-label">LSID</div>
                      <div className="lsid-selector-icon"></div>
                    </div>
                    <span className="lsid-uri">urn:lsid:catalogueoflife.org:taxon:0ab5003e-d35f-11e6-9d3f-bc764e092680:col20170308</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="rank">Order</td>
                <td className="taxon">
                  <Link to="/browse/tree/id/844f3ce878b11544be19b2da1c2f03dc">Pinales</Link>
                </td>
                <td className="rank">
                  <Link to="/details/database/id/45">Conifer Database</Link>                        </td>
                <td>
                  <div className="lsid-selector collapsed">
                    <div className="lsid-selector-wrapper" onclick="javascript:switchLSIDSelector(this.parentNode)">
                      <div className="lsid-selector-label">LSID</div>
                      <div className="lsid-selector-icon"></div>
                    </div>
                    <span className="lsid-uri">urn:lsid:catalogueoflife.org:taxon:0ab501e9-d35f-11e6-9d3f-bc764e092680:col20170308</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="rank">Family</td>
                <td className="taxon">
                  <Link to="/browse/tree/id/b385e5b1bd137efbb9a5387821127481">Pinaceae</Link>
                </td>
                <td className="rank">
                  <Link to="/details/database/id/45">Conifer Database</Link>                        </td>
                <td>
                  <div className="lsid-selector collapsed">
                    <div className="lsid-selector-wrapper" onclick="javascript:switchLSIDSelector(this.parentNode)">
                      <div className="lsid-selector-label">LSID</div>
                      <div className="lsid-selector-icon"></div>
                    </div>
                    <span className="lsid-uri">urn:lsid:catalogueoflife.org:taxon:0abc655f-d35f-11e6-9d3f-bc764e092680:col20170308</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="rank">Genus</td>
                <td className="taxon">
                  <Link to="/browse/tree/id/21ecc5d761cb3411a85ac7b8b32c807d"><i>Picea</i></Link>
                </td>
                <td className="rank">
                  <Link to="/details/database/id/45">Conifer Database</Link>                        </td>
                <td>
                  <div className="lsid-selector collapsed">
                    <div className="lsid-selector-wrapper" onclick="javascript:switchLSIDSelector(this.parentNode)">
                      <div className="lsid-selector-label">LSID</div>
                      <div className="lsid-selector-icon"></div>
                    </div>
                    <span className="lsid-uri">urn:lsid:catalogueoflife.org:taxon:0b87edfe-d35f-11e6-9d3f-bc764e092680:col20170308</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="rank">Species</td>
                <td className="taxon">
                  <Link to="/browse/tree/id/b9f99a1f126b6b9d3d8c560386dea188"><i>Picea abies</i></Link>
                </td>
                <td className="rank">
                  <Link to="/details/database/id/45">Conifer Database</Link>                        </td>
                <td>
                  <div className="lsid-selector collapsed">
                    <div className="lsid-selector-wrapper" onclick="javascript:switchLSIDSelector(this.parentNode)">
                      <div className="lsid-selector-label">LSID</div>
                      <div className="lsid-selector-icon"></div>
                    </div>
                    <span className="lsid-uri">urn:lsid:catalogueoflife.org:taxon:3e55e0d1-d35f-11e6-9d3f-bc764e092680:col20170308</span>
                  </div>
                </td>
              </tr>
            </table>
            </td>
          </tr>
          <tr className="even">
            <th className="vertical">Distribution:</th>
            <td>10 FIN NOR SWE 11 AUT-AU AUT-LI CZE-CZ CZE-SL GER HUN POL SWI 12 FRA-FR 13 ALB BUL GRC ITA-IT ROM TUE YUG-BH YUG-CR YUG-KO YUG-MA YUG-MN YUG-SE YUG-SL 14 BLR BLT-ES BLT-LA BLT-LI RUC RUE RUN RUW UKR-MO UKR-UK; Central, N and E Europe, eastward to the Ural Mountains.</td>
          </tr>
          <tr className="odd">
            <th className="vertical">Environment:</th>
            <td>Terrestrial</td>
          </tr>


          <tr className="even">
            <th className="vertical">Additional data:</th>
            <td>IUCN status: LC<br /></td>
          </tr>
          <tr className="odd">
            <th className="vertical">Latest taxonomic scrutiny:</th>
            <td>Farjon A., 31-Jan-2014</td>
          </tr>
          <tr className="even">
            <th className="vertical">Source database:</th>
            <td><Link to="/details/database/id/45">Conifer Database, Jan 2014</Link>
              <span id="database-qualifiers-span">
                                    <img src="/images/global.png"
                                         className="vertical-align" title="Global" />&nbsp;
                <span title="Completeness" className="vertical-align">
                        100%
                    </span>
                                                    <span title="This is a complete and fully scrutinised taxonomic checklist for an entire taxon with a high quality of expertise and frequent updates, which covers nearly all known species diversity in the taxon worldwide.">
                                                    <img src="/images/star.png" alt="" className="vertical-align" />
                                                    <img src="/images/star.png" alt="" className="vertical-align" />
                                                    <img src="/images/star.png" alt="" className="vertical-align" />
                                                    <img src="/images/star.png" alt="" className="vertical-align" />
                                                    <img src="/images/star.png" alt="" className="vertical-align" />
                                            </span>
                            </span>
            </td>
          </tr>
          <tr className="odd">
            <th className="vertical">Bibliographic citation:</th>
            <td>Farjon A., Gardner M. & Thomas P. (2017). Conifer Database (version Jan 2014). In: Species 2000 & ITIS Catalogue of Life, 2017 Annual Checklist (Roskov Y., Abucay L., Orrell T., Nicolson D., Bailly N., Kirk P.M., Bourgoin T., DeWalt R.E., Decock W., De Wever A., Nieukerken E. van, Zarucchi J., Penev L., eds.). Digital resource at www.catalogueoflife.org/annual-checklist/2017. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-884X.</td>
          </tr>
          <tr className="even">
            <th className="vertical">Online resource:</th>
            <td>        </td>
          </tr>

          <tr className="even divisor">
            <td colspan="2 "/>
          </tr>

          <tr className="odd" style="border-top: solid 1px;">
            <th className="vertical">CoL taxon LSID:</th>
            <td><span className="lsid">urn:lsid:catalogueoflife.org:taxon:604d01de-0429-11e7-8d43-bc764e092680:col20170308</span></td>
          </tr>
        </table>
        <br/>
        <div className="page_links">
          <Link to="/">Back to last page</Link> |
          <Link to="/search/all">New search</Link>
        </div>
    </div>
  );
};

export default Species;
