import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
  return (
      <div id="content" className="view">
          <div className="page_header">
              About the Catalogue of Life
          </div>
          <div className="navigator">
              <form method="post">
                  <dl className="zend_form_dojo">
                      <dt id="previous-label">
                          &nbsp;
                      </dt>
                      <dd id="previous-element">
                          <span className="dijit dijitReset dijitLeft dijitInline hidden dijitButton" dojoattachevent="ondijitclick:_onButtonClick,onmouseenter:_onMouse,onmouseleave:_onMouse,onmousedown:_onMouse" widgetid="previous_top"><span className="dijitReset dijitRight dijitInline"><span className="dijitReset dijitInline dijitButtonNode"><button className="dijitReset dijitStretch dijitButtonContents" dojoattachpoint="titleNode,focusNode" name="previous" type="button" value="" wairole="button" waistate="labelledby-previous_top_label"   aria-labelledby="previous_top_label" id="previous_top" tabIndex="0"><span className="dijit dijitReset dijitLeft dijitInline hidden dijitButton" dojoattachevent="ondijitclick:_onButtonClick,onmouseenter:_onMouse,onmouseleave:_onMouse,onmousedown:_onMouse" widgetid="previous_top"><span className="dijitReset dijitInline" dojoattachpoint="iconNode"><span className="dijitReset dijitToggleButtonIconChar">&nbsp;</span></span><span className="dijitReset dijitInline dijitButtonText" id="previous_top_label" dojoattachpoint="containerNode">&lt;&lt; Previous</span></span></button></span></span></span>
                      </dd>
                      <dt id="page-label">
                          &nbsp;
                      </dt>
                      <dd id="page-element">
                          <select name="page" id="page_top" onchange="navigateToSelected(&quot;/annual-checklist/2017/info/&quot;, this, &quot;current&quot;)">
                              <option value="about" label="About the Catalogue of Life" selected="selected">
                                  About the Catalogue of Life
                              </option>
                              <option value="special" label="What's new?">
                                  What's new?
                              </option>
                              <option value="ac" label="2017 Annual Checklist">
                                  2017 Annual Checklist
                              </option>
                              <option value="totals" label="Species totals">
                                  Species totals
                              </option>
                              <option value="databases" label="Source databases">
                                  Source databases
                              </option>
                              <option value="hierarchy" label="Classification, estimates &amp; extinct taxa">
                                  Classification, estimates &amp; extinct taxa
                              </option>
                              <option value="copyright" label="Copyright, reproduction &amp; sale">
                                  Copyright, reproduction &amp; sale
                              </option>
                              <option value="cite" label="How to cite this work">
                                  How to cite this work
                              </option>
                              <option value="websites" label="Web sites">
                                  Web sites
                              </option>
                              <option value="contact" label="Contact us">
                                  Contact us
                              </option>
                              <option value="acknowledgements" label="Acknowledgments">
                                  Acknowledgments
                              </option>
                          </select>
                      </dd>
                      <dt id="next-label">
                          &nbsp;
                      </dt>
                      <dd id="next-element">
                          <span className="dijit dijitReset dijitLeft dijitInline dijitButton" dojoattachevent="ondijitclick:_onButtonClick,onmouseenter:_onMouse,onmouseleave:_onMouse,onmousedown:_onMouse" widgetid="next_top">
                              <span className="dijitReset dijitRight dijitInline">
                                  <span className="dijitReset dijitInline dijitButtonNode">
                                      <button className="dijitReset dijitStretch dijitButtonContents" dojoattachpoint="titleNode,focusNode" name="next" type="button" value="" wairole="button" waistate="labelledby-next_top_label"   aria-labelledby="next_top_label" id="next_top" tabIndex="0">
                                          <span className="dijit dijitReset dijitLeft dijitInline dijitButton" dojoattachevent="ondijitclick:_onButtonClick,onmouseenter:_onMouse,onmouseleave:_onMouse,onmousedown:_onMouse" widgetid="next_top">
                                              <span className="dijitReset dijitInline" dojoattachpoint="iconNode">
                                                  <span className="dijitReset dijitToggleButtonIconChar">&nbsp;</span>
                                              </span>
                                              <span className="dijitReset dijitInline dijitButtonText" id="next_top_label" dojoattachpoint="containerNode">Next &gt;&gt;</span>
                                          </span>
                                      </button>
                                  </span>
                              </span>
                          </span>
                      </dd>
                  </dl>
              </form>
          </div>
          <div className="info_content">
              <p className="field_header">
                  The Species 2000 &amp; ITIS Catalogue of Life
              </p>
              <span style={{width: 405, float: 'left', paddingLeft: 0, marginRight: 15, marginBottom: 10, backgroundColor: '#FFF'}}>
                  <table>
                      <tbody>
                      <tr>
                          <td>
                              <img src="/images/frank.jpg" title="Frank Bisby" alt="Frank Bisby" width="157" height="187"/>
                          </td>
                          <td>
                            <span style={{float: 'right', fontSize: 11, fontStyle: 'italic'}}>"The Catalogue of Life is the most comprehensive and authoritative global index of species currently available. It consists of a single integrated species checklist and taxonomic hierarchy."<br/>
                            <img src="/images/signature.png" title="signature" alt="signature" width="81" height="35" style={{marginLeft: 110}}/><br/>
                            Frank Bisby (1945—2011) was leader of the Catalogue of Life project from its very beginning. His inspirational vision and spirit remains with all of us.</span>
                          </td>
                      </tr>
                      </tbody>
                  </table>
              </span>
              <p>
                  The Catalogue of Life (CoL) is the nearest thing to a comprehensive catalogue of all known species of organisms on Earth. Continuous progress is made towards completion, and this edition contains <b>1,664,506</b> living and <b>49,346</b> extinct species. Please note that this is probably just over three quarters of the world's known species. This means that for many groups it continues to be deficient, and users will notice that many species are still missing from the Catalogue.
              </p>
              <p>
                  The present Catalogue is compiled from checklists provided by <b>156</b> taxonomic databases. Many of these contain taxonomic data and opinions from extensive networks of specialists, so that the complete work contains contributions from more than 3,000 specialists distributed throughout the global taxonomic profession. Species 2000 and ITIS teams peer review databases, select appropriate sectors and integrate the sectors into a single coherent catalogue with a single hierarchical classification.
              </p><i>"Like all science the Catalogue of Life is a work in progress. Your contributions and feedback are essential to further improve quality and coverage of the Catalogue of Life"</i> - Peter H. Schalk, Executive Secretary for Species 2000.
              <p>
                  The network and e-infrastructure of the CoL was realised step-wise in a number of projects mainly with investments from the European Commission but also from other sources around the world. Unified workflow brings the Annual Checklist and Dynamic Checklist together into <b>The Catalogue of Life</b>. CoL Workbench tool has been used for data harvesting and final processing of the Catalogue of Life editions since September 2011.
              </p>
              <p>
                  <span className="field_header">• The Catalogue of Life <span style={{fontWeight: 'normal'}}>(monthly updated editions)</span></span><br/>
                  These are progressively evolving editions in what becomes a dynamically developing system, made available online with web services. CoL switched to monthly editions in February 2012. The latest version is always available for online access at <a href="http://www.catalogueoflife.org/col" target="_blank">www.catalogueoflife.org/col</a>. The announcement of every new release is published on CoL Twitter (<a href="https://twitter.com/catalogueoflife" target="_blank">twitter.com/catalogueoflife</a>).
              </p>
              <p>
                  <span className="field_header">• Annual Checklist <span style={{fontWeight: 'normal'}}>of the Catalogue of Life</span></span><br/>
                  This is a fixed edition published each April both online (with web services) and on DVD. The latest Annual Checklist is always available online at <a href="http://www.catalogueoflife.org/annual-checklist" target="_blank">www.catalogueoflife.org/annual-checklist</a>. A fixed edition that is published, archived and deposited in public libraries, can be cited, and can be used as a common catalogue for comparative purposes by many organisations. A copy is on this DVD, which is distributed free of charge, and identical copies are viewable and downloadable from the website. The archive edition for 2017 is at <a href="http://www.catalogueoflife.org/annual-checklist/2017" target="_blank">www.catalogueoflife.org/annual-checklist/2017</a>. Archive editions of previous years can be found by changing the year in the URL (e.g. /2016, /2015 etc.). Downloadable versions and web services are available at <a href="http://www.catalogueoflife.org" target="_blank">www.catalogueoflife.org</a>.
              </p>
              <p className="field_header">
                  The Catalogue of Life history
              </p>
              <p>
                  In June 2001 the Species 2000 and ITIS organisations, that had previously worked separately, decided to work together to create the Catalogue of Life, estimated at 1.9 million living species (Chapman, 2009). The two organisations remain separate and different in structure. However, by working together in creating a common product, the partnership has enabled them to reduce duplication of effort, make better use of resources, and to accelerate production. The combined Annual Checklist has become well established as a cited reference used for data compilation and comparison. For instance, it is used as the principal taxonomic index in the GBIF and EoL data portals and recognised by the CBD.
              </p>
              <p>
                  The policy for the Catalogue of Life programme is developed by the CoL Global Team: Michael Ruggiero (Chairman, USA), Nicolas Bailly (Vice Chairman, Convener of the Taxonomy Group, Canada), Thierry Bourgoin (France), Mark Costello (New Zealand), Alastair Culham (UK), David Eades (USA), Li-Qiang Ji (China), Jeya Kathirithamby (UK), Patricia Mergen (Belgium), Thomas Orrell (USA), Richard Pyle (USA), Heimo Rainer (Austria), David Remsen (Convener of the Information Systems Group, USA) and Leen Vandepitte (Belgium), with further assistance from the Regional Hubs.
              </p>
              <p className="field_header">
                  About Species 2000
              </p>
              <p>
                  Species 2000 (<a href="http://www.sp2000.org" target="_blank">www.sp2000.org</a>) is an autonomous federation of taxonomic database custodians, involving taxonomists throughout the world. The goal is to collate a uniform and validated index to the world's known species: <b>the Catalogue of Life</b>. Species 2000 is registered as a not-for-profit company limited by guarantee (registered in England No. 3479405) with taxonomic databases and relevant software organisations from around the world as members. Species 2000 started from a TDWG Task Group in 1996; sponsored by CODATA, IUBS and IUMS. It is an associate participant in GBIF, recognised authority by UNEP, CBD, IPBES and providing a validated taxonomic backbone to GBIF, EBI/NSDC, Barcode of Life, IUCN Red List, EoL and many other initiatives aggregating data or producing services.
              </p>
              <p>
                  Species 2000 is governed by an Annual General Meeting appointed Board of Directors that deals with legal and financial matters, and that is advised by the CoL Global Team on scientific policy and information and communications technology (ICT). The Directors are presently: Peter Schalk (Chairman, the Netherlands), Alex Gray (Company Secretary and Treasurer, UK), Guy Cochrane (UK), David Eades (USA), Francisco Hernandez (Belgium), Keping Ma (China), Vanderlei Perez Canhos (Brazil), Michael Ruggiero (Chairman of CoL Global Team, USA) and Jeroen Snijders (the Netherlands).
              </p>
              <p className="field_header">
                  About ITIS
              </p>
              <p>
                  The Integrated Taxonomic Information System (ITIS) is a partnership of federal agencies and other organisations from the United States, Canada and Mexico, with data stewards and experts from around the world (see <a href="http://www.itis.gov" target="_blank">www.itis.gov</a>). The ITIS database is an automated reference of scientific and common names of all seven kingdoms of life (Archaea, Bacteria, Protozoa, Chromista, Fungi, Plantae, Animalia) and contains global treatments for most groups. The ITIS data development team, taxonomists, and taxonomic stewards work to create, update, and expand taxonomic coverage through direct checklist development or through adoption of published revisions and checklists. Taxonomic groups are periodically reviewed and updated for currency as part of long-term ITIS planning. All groups entered into ITIS are subjected to numerous proofing, data standard, and validation criteria and are assessed for both taxonomic credibility and completeness. Currently, ITIS contains more than 855,500 scientific and common names in all kingdoms. ITIS is a founding associate member of GBIF and supplies both global and New World groups to the Catalogue of Life - with emphasis on GSDs.
              </p>
              <p>
                  ITIS is managed by Gerald Guala (Director), Thomas Orrell (Deputy Director), David Nicolson (Data Development Leader), Mike Frame (Information Technology Leader), Roy McDiarmid (Taxonomy Leader) and James Macklin (ITIS-Canada Director). They are advised and supported by the ITIS Steering Committee and ITIS Data Stewards.
              </p>
              <p className="field_header">
                  Structure of the Catalogue of Life
              </p>
              <p>
                  The CoL goal is to list every distinct species in each group of organisms. At present, some groups are globally complete, some are represented by global checklists that are nearing completion, and others are represented by partially completed checklists. The global sectors, whether complete or not, are provided by selected, peer reviewed <b>global species databases</b> (GSDs - see definition below) in the Species 2000 federation or by equivalent global sectors of ITIS. The Catalogue of Life has expanded its coverage to include fossil taxa since 2015.
              </p>
              <div className="copyright_notice">
                  <b>Definition of a Global Species Database (GSD)</b>
                  <p>
                      This is a taxonomic database, which aspires to the following properties:
                  </p>
                  <p>
                      • Cover one taxon worldwide<br/>
                      • Contain a taxonomic checklist of all species within that taxon<br/>
                      • Deal with species as taxa, and contain synonymy and taxonomic opinion<br/>
                      • Have an explicit mechanism for seeking at least one responsible/consensus taxonomy, and for applying it consistently<br/>
                      • Cross-index significant alternative taxonomies in their synonymy
                  </p>
              </div>
              <p>
                  The partial sectors in the Catalogue of Life are supplied by regional species databases such as ITIS Regional (North America), NZIB (New Zealand), Catalogue of Life China, Fauna Europaea, and by thematic databases such as WoRMS (marine species) and FADA (freshwater species). Sometime, regional and thematic checklists are the only currently available resources for incomplete groups. Regional and thematic checklists have been assembled in CoL proto-GSDs. A <b>proto-GSD</b> is a taxonomic database with a draft species checklist, which is built from regional, thematic and nomenclatural databases, using semi-automatic procedures for merging species lists under a single management classification, without detailed scrutiny by taxon specialists. Since 2013, the Catalogue of Life has included experimental proto-GSDs to fill major gaps in the phyla Platyhelminthes and Myxozoa, in the class Clitellata (Annelida)and in copepod orders Calanoida and Poecilostomatoida. Each proto-GSD is a temporarily solution until an equivalent GSD becomes available to the Catalogue of Life.
              </p>
              <p>
                  Each species in the Catalogue of Life is listed with an accepted scientific name, a cited reference and its position in the hierarchical classification. In addition, common names, synonyms, and distribution and ecological data are provided, but these data may not be complete. The list of field groups (known as the "Catalogue of Life Standard Dataset") is given below:
              </p>
              <div className="copyright_notice">
                  <b>The Catalogue of Life Standard Dataset (2014 version)</b>
                  <p>
                      (1) Accepted scientific name with references<br/>
                      (2) Synonyms with references<br/>
                      (3) Common names with references<br/>
                      (4) Classification above genus<br/>
                      (5) Distribution<br/>
                      (6) Life Zone/Environment<br/>
                      (7) Current and Past Existence<br/>
                      (8) Additional data (optional)<br/>
                      (9) Latest taxonomic scrutiny (specialist name and date)<br/>
                      (10) Taxon GUID from GSD (not displayed through public interface)<br/>
                      (11) Name GUID (not displayed through public interface)<br/>
                      (12) CoL LSID<br/>
                      (13) Source database name and version<br/>
                      (14) Link to online resource<br/>
                  </p>
              </div>
              <p>
                  More detailed information about the Standard Dataset is available on the Catalogue of Life website (<a href="http://www.catalogueoflife.org/content/contributing-your-data#standard" target="_blank">www.catalogueoflife.org</a>)
              </p>
              <p>
                  Each species is placed in a taxonomic classification, the extent of which depends on the scope of the GSD. Above the highest taxon in each GSD, the management classification, agreed by Species 2000 and ITIS as a practical tool to provide access to the species checklist, is attached. However, below the point of attachment the classification originates from the source databases and so may change with each update.
              </p>
              <p>
                  The top levels of the taxonomic hierarchy were set as the <i>CoL Management Classification</i> in 2005 and revised in 2011 and 2015. Please also read the notes "Classification, estimates &amp; extinct taxa" at <a href="http://www.catalogueoflife.org/annual-checklist/2017/info/hierarchy" target="_blank">www.catalogueoflife.org/annual-checklist/2017/info/hierarchy</a>.
              </p>
              <p>
                  Where available from the suppliers infraspecific taxa, such as subspecies, varieties and forms, have also been included but this coverage is variable between taxonomic sectors.
              </p>
              <p>
                  Where possible, a web link to a species page in the source database is provided at the bottom of each CoL Species Details page.
              </p>
              <p className="field_header">
                  Functionality of the Catalogue of Life
              </p>
              <p>
                  • Species (and infraspecific taxa) can be located either by searching by name or by browsing through the hierarchical classification.<br/>
                  • Taxa of every rank can be searched or browsed with or without the inclusion of extinct taxa.<br/>
                  • Search by name can be done using accepted scientific name, synonym or common name. Automatic synonymic and common name indexing takes the user directly to the species under its accepted name. The search can use part names, or be restricted to complete words.<br/>
                  • Transversing down the tree or classification uses accepted names for the taxa.<br/>
                  • On each Species Details page the relevant higher taxa are listed, and provide a link to the relevant node of the hierarchical classification.<br/>
                  • The Species Details pages link to the source database, usually showing further information.<br/>
                  • A complete species list for each higher taxon in the classification can be accessed via the option Browse Taxonomic Classification.<br/>
                  • The current number of species for each taxon in the Catalogue, the estimated number of species and completeness of the checklists can be found in the Taxonomic Tree.<br/>
                  • Names of source databases are displayed with each taxon in the Taxonomic Tree.<br/>
                  • The operational menu of the Catalogue now can be shown in different languages.<br/>
                  • A standard bibliographic citation for each contributing database can be found on the <a href="http://www.catalogueoflife.org/annual-checklist/2017/info/cite" target="_blank">"How To Cite?"</a> page and on the Database Details pages.
              </p>
              <p>
                  The DVD contains the Annual Checklist dataset and the software identical to that used on the Web.
              </p>
          </div>
          <div className="navigator">
              <form method="post">
                  <dl className="zend_form_dojo">
                      <dt id="previous-label">
                          &nbsp;
                      </dt>
                      <dd id="previous-element">
                          <span className="dijit dijitReset dijitLeft dijitInline hidden dijitButton" dojoattachevent="ondijitclick:_onButtonClick,onmouseenter:_onMouse,onmouseleave:_onMouse,onmousedown:_onMouse" widgetid="previous_bottom"><span className="dijitReset dijitRight dijitInline"><span className="dijitReset dijitInline dijitButtonNode"><button className="dijitReset dijitStretch dijitButtonContents" dojoattachpoint="titleNode,focusNode" name="previous" type="button" value="" wairole="button" waistate="labelledby-previous_bottom_label" aria-labelledby="previous_bottom_label" id="previous_bottom" tabIndex="0"><span className="dijit dijitReset dijitLeft dijitInline hidden dijitButton" dojoattachevent="ondijitclick:_onButtonClick,onmouseenter:_onMouse,onmouseleave:_onMouse,onmousedown:_onMouse" widgetid="previous_bottom"><span className="dijitReset dijitInline" dojoattachpoint="iconNode"><span className="dijitReset dijitToggleButtonIconChar">&nbsp;</span></span><span className="dijitReset dijitInline dijitButtonText" id="previous_bottom_label" dojoattachpoint="containerNode">&lt;&lt; Previous</span></span></button></span></span></span>
                      </dd>
                      <dt id="page-label">
                          &nbsp;
                      </dt>
                      <dd id="page-element">
                          <select name="page" id="page_bottom" onchange="navigateToSelected(&quot;/annual-checklist/2017/info/&quot;, this, &quot;current&quot;)">
                              <option value="about" label="About the Catalogue of Life" selected="selected">
                                  About the Catalogue of Life
                              </option>
                              <option value="special" label="What's new?">
                                  What's new?
                              </option>
                              <option value="ac" label="2017 Annual Checklist">
                                  2017 Annual Checklist
                              </option>
                              <option value="totals" label="Species totals">
                                  Species totals
                              </option>
                              <option value="databases" label="Source databases">
                                  Source databases
                              </option>
                              <option value="hierarchy" label="Classification, estimates &amp; extinct taxa">
                                  Classification, estimates &amp; extinct taxa
                              </option>
                              <option value="copyright" label="Copyright, reproduction &amp; sale">
                                  Copyright, reproduction &amp; sale
                              </option>
                              <option value="cite" label="How to cite this work">
                                  How to cite this work
                              </option>
                              <option value="websites" label="Web sites">
                                  Web sites
                              </option>
                              <option value="contact" label="Contact us">
                                  Contact us
                              </option>
                              <option value="acknowledgements" label="Acknowledgments">
                                  Acknowledgments
                              </option>
                          </select>
                      </dd>
                      <dt id="next-label">
                          &nbsp;
                      </dt>
                      <dd id="next-element">
                          <span className="dijit dijitReset dijitLeft dijitInline dijitButton" dojoattachevent="ondijitclick:_onButtonClick,onmouseenter:_onMouse,onmouseleave:_onMouse,onmousedown:_onMouse" widgetid="next_bottom"><span className="dijitReset dijitRight dijitInline"><span className="dijitReset dijitInline dijitButtonNode"><button className="dijitReset dijitStretch dijitButtonContents" dojoattachpoint="titleNode,focusNode" name="next" type="button" value="" waiwaistate="labelledby-next_bottom_label" aria-labelledby="next_bottom_label" id="next_bottom" tabIndex="0"><span className="dijit dijitReset dijitLeft dijitInline dijitButton" dojoattachevent="ondijitclick:_onButtonClick,onmouseenter:_onMouse,onmouseleave:_onMouse,onmousedown:_onMouse" widgetid="next_bottom"><span className="dijitReset dijitInline" dojoattachpoint="iconNode"><span className="dijitReset dijitToggleButtonIconChar">&nbsp;</span></span><span className="dijitReset dijitInline dijitButtonText" id="next_bottom_label" dojoattachpoint="containerNode">Next &gt;&gt;</span></span></button></span></span></span>
                      </dd>
                  </dl>
              </form>
          </div>
      </div>
    );
};

export default About;
