import React from 'react';
import {Link} from 'react-router-dom';

const Results = () => {
  return (
      <div id="content" className="view ">
          <h1 className="page_header">
              Search all names - Results for "Abies"</h1>
          <div className="results_header">
              <div className="results_counter" align="right">
                  Records found:
                  485</div>
              <div className="results_form"><form id="itemsPerPage" enctype="application/x-www-form-urlencoded" method="post" action="/annual-checklist/2017/search/all"><div className="items-form">
                  <dt id="itemsGroup-label">&nbsp;</dt><dd id="itemsGroup-element"><fieldset id="fieldset-itemsGroup"><dl>
                  <dt id="items-label"><label for="items" className="required">Records per page:</label></dt>
                  <dd>
                      <input places="3" style="width: 70px" id="items" name="items" value="20" type="text" /></dd>
                  <dt id="update-label">&nbsp;</dt><dd id="update-element">
                  <input id="update" name="update" value="Update" type="submit" /></dd></dl></fieldset></dd>
                  <dt id="hidden-label">&nbsp;</dt><dd id="hidden-element"><fieldset id="fieldset-hidden"><dl>
                  <dt id="key-label">&nbsp;</dt>
                  <dd id="key-element">
                      <input type="hidden" name="key" value="Abies" id="key" /></dd>
                  <dt id="match-label">&nbsp;</dt>
                  <dd id="match-element">
                      <input type="hidden" name="match" value="1" id="match" /></dd>
                  <dt id="fuzzy-label">&nbsp;</dt>
                  <dd id="fuzzy-element">
                      <input type="hidden" name="fuzzy" value="" id="fuzzy" /></dd>
                  <dt id="fossil-label">&nbsp;</dt>
                  <dd id="fossil-element">
                      <input type="hidden" name="fossil" value="1" id="fossil" /></dd></dl></fieldset></dd></div></form></div>
          </div>
          <div className="page_links">
              <a href="/annual-checklist/2017/search/export">
                  Export search results</a> |
              <a href="/annual-checklist/2017/search/all">
                  New search</a>
          </div>
          <div className="paginationControl">
              <!-- Previous page link -->

              <!-- Show first page if not present -->

              <!-- Numbered page links -->
              <span className="page-current">1</span> |
              <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/2/sort//direction/asc">
                  2    </a> |
              <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/3/sort//direction/asc">
                  3    </a> |
              <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/4/sort//direction/asc">
                  4    </a> |
              <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/5/sort//direction/asc">
                  5    </a> |
              <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/6/sort//direction/asc">
                  6    </a> |
              <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/7/sort//direction/asc">
                  7    </a> |
              <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/8/sort//direction/asc">
                  8    </a> |
              <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/9/sort//direction/asc">
                  9    </a> |
              <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/10/sort//direction/asc">
                  10    </a> |

              <!-- Show lastpage if not present -->
              ... |
              <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/25/sort//direction/asc">
                  25    </a> |

              <!-- Next page link -->
              <a className="page-slider" href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/2/sort//direction/asc">
                  Next &gt;&gt;
              </a>
          </div>
          <table className="results">
              <tr className="even">
                  <th className="horizontal">
                      <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/sort/name/direction/asc">
                          Name</a>
                      <span className="sort-arrow"></span>
                  </th>
                  <th className="horizontal">
                      <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/sort/rank/direction/asc">
                          Rank</a>
                      <span className="sort-arrow"></span>
                  </th>
                  <th className="horizontal">
                      <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/sort/status/direction/asc">
                          Name status</a>
                      <span className="sort-arrow"></span>
                  </th>
                  <th className="horizontal">
                      <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/sort/group/direction/asc">
                          Group</a>
                      <span className="sort-arrow"></span>
                  </th>
                  <th className="horizontal">
                      <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/sort/db/direction/asc">
                          Source database</a>
                      <span className="sort-arrow"></span>
                  </th>
              </tr>
              <tr className="odd">
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/browse/tree/id/200f52638f6d098b26df65d3b26f0f09"><i><span className="matchHighlight">Abies</span></i></a>
                  </td>
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/browse/tree/id/200f52638f6d098b26df65d3b26f0f09">
                          Genus            </a>
                  </td>
                  <td className="field_header_black"></td>
                  <td>Plantae</td>
                  <td>
                  </td>
              </tr>
              <tr className="even">
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/c526234e655cec65618f58161d24932a/synonym/4251802078a0d844bda6c62ae5a145aa"><i><span className="matchHighlight">Abies</span> <span className="matchHighlight">abies</span></i>  (L.) Rusby</a>
                  </td>
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/c526234e655cec65618f58161d24932a/synonym/4251802078a0d844bda6c62ae5a145aa">
                          Species            </a>
                  </td>
                  <td className="field_header_black">synonym for <a href="/annual-checklist/2017/details/species/id/c526234e655cec65618f58161d24932a/synonym/4251802078a0d844bda6c62ae5a145aa"><i>Picea abies var. abies</i></a></td>
                  <td>Plantae</td>
                  <td>
                      <a className="wrapLogo tinyImgLink" href="/annual-checklist/2017/details/database/id/45">
                          <img
                              src="/annual-checklist/2017/images/databases/Conifer_Database.gif"
                              alt="Conifer Database"
                              title="Conifer Database" /></a>
                  </td>
              </tr>
              <tr className="odd">
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/8b551341829068875a87973edac352cb/synonym/8c1130d8762b43976d80a1522731da40"><i><span className="matchHighlight">Abies</span> akatodo</i>  Miyabe ex Sarg.</a>
                  </td>
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/8b551341829068875a87973edac352cb/synonym/8c1130d8762b43976d80a1522731da40">
                          Species            </a>
                  </td>
                  <td className="field_header_black">synonym for <a href="/annual-checklist/2017/details/species/id/8b551341829068875a87973edac352cb/synonym/8c1130d8762b43976d80a1522731da40"><i>Abies sachalinensis var. sachalinensis</i></a></td>
                  <td>Plantae</td>
                  <td>
                      <a className="wrapLogo tinyImgLink" href="/annual-checklist/2017/details/database/id/45">
                          <img
                              src="/annual-checklist/2017/images/databases/Conifer_Database.gif"
                              alt="Conifer Database"
                              title="Conifer Database" /></a>
                  </td>
              </tr>
              <tr className="even">
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/12dca9c49741815f82400bb7bff50553"><i><span className="matchHighlight">Abies</span> alba</i>  Mill.</a>
                  </td>
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/12dca9c49741815f82400bb7bff50553">
                          Species            </a>
                  </td>
                  <td className="field_header_black">accepted name</td>
                  <td>Plantae</td>
                  <td>
                      <a className="wrapLogo tinyImgLink" href="/annual-checklist/2017/details/database/id/45">
                          <img
                              src="/annual-checklist/2017/images/databases/Conifer_Database.gif"
                              alt="Conifer Database"
                              title="Conifer Database" /></a>
                  </td>
              </tr>
              <tr className="odd">
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/12dca9c49741815f82400bb7bff50553/synonym/eb680191b2ca239c6068426be96be71b"><i><span  className="matchHighlight">Abies</span>  alba  <span className="marker">subsp.</span>  apennina</i>  Brullo, Scelsi & Spampinato</a>
                  </td>
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/12dca9c49741815f82400bb7bff50553/synonym/eb680191b2ca239c6068426be96be71b">
                          Infraspecific taxon            </a>
                  </td>
                  <td className="field_header_black">synonym for <a href="/annual-checklist/2017/details/species/id/12dca9c49741815f82400bb7bff50553/synonym/eb680191b2ca239c6068426be96be71b"><i>Abies  alba</i>  Mill.</a></td>
                  <td>Plantae</td>
                  <td>
                      <a className="wrapLogo tinyImgLink" href="/annual-checklist/2017/details/database/id/45">
                          <img
                              src="/annual-checklist/2017/images/databases/Conifer_Database.gif"
                              alt="Conifer Database"
                              title="Conifer Database" /></a>
                  </td>
              </tr>
              <tr className="even">
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/6a87ffbec80d15005452f6159eec7dd0/synonym/6caeb0df03e987eedb65757fec96888a"><i><span  className="matchHighlight">Abies</span>  alba  <span className="marker">subsp.</span>  borisii-regis</i>  (Mattf.) Kozuharov & N. Andreev</a>
                  </td>
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/6a87ffbec80d15005452f6159eec7dd0/synonym/6caeb0df03e987eedb65757fec96888a">
                          Infraspecific taxon            </a>
                  </td>
                  <td className="field_header_black">synonym for <a href="/annual-checklist/2017/details/species/id/6a87ffbec80d15005452f6159eec7dd0/synonym/6caeb0df03e987eedb65757fec96888a"><i>Abies  borisii-regis</i>  Mattf.</a></td>
                  <td>Plantae</td>
                  <td>
                      <a className="wrapLogo tinyImgLink" href="/annual-checklist/2017/details/database/id/45">
                          <img
                              src="/annual-checklist/2017/images/databases/Conifer_Database.gif"
                              alt="Conifer Database"
                              title="Conifer Database" /></a>
                  </td>
              </tr>
              <tr className="odd">
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/b0d704eb5a9dc9ebd73f1e36c196eca5/synonym/4245c35177c6180b61a9a89490e8216d"><i><span  className="matchHighlight">Abies</span>  alba  <span className="marker">subsp.</span>  equi-trojani</i>  (Asch. & Sint. ex Boiss.) Asch. & Graebn.</a>
                  </td>
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/b0d704eb5a9dc9ebd73f1e36c196eca5/synonym/4245c35177c6180b61a9a89490e8216d">
                          Infraspecific taxon            </a>
                  </td>
                  <td className="field_header_black">synonym for <a href="/annual-checklist/2017/details/species/id/b0d704eb5a9dc9ebd73f1e36c196eca5/synonym/4245c35177c6180b61a9a89490e8216d"><i>Abies  nordmanniana  <span className="marker">subsp.</span>  equi-trojani</i>  (Asch. & Sint. ex Boiss.) Coode & Cullen</a></td>
                  <td>Plantae</td>
                  <td>
                      <a className="wrapLogo tinyImgLink" href="/annual-checklist/2017/details/database/id/45">
                          <img
                              src="/annual-checklist/2017/images/databases/Conifer_Database.gif"
                              alt="Conifer Database"
                              title="Conifer Database" /></a>
                  </td>
              </tr>
              <tr className="even">
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/94d2b0fa5ac9a92513bdeccbe6ff9281/synonym/b7e919e8aa54d0ff9382321e1582b204"><i><span  className="matchHighlight">Abies</span>  alba  <span className="marker">subsp.</span>  nebrodensis</i>  (Lojac.) Nitz.</a>
                  </td>
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/94d2b0fa5ac9a92513bdeccbe6ff9281/synonym/b7e919e8aa54d0ff9382321e1582b204">
                          Infraspecific taxon            </a>
                  </td>
                  <td className="field_header_black">synonym for <a href="/annual-checklist/2017/details/species/id/94d2b0fa5ac9a92513bdeccbe6ff9281/synonym/b7e919e8aa54d0ff9382321e1582b204"><i>Abies  nebrodensis</i>  (Lojac.) Mattei</a></td>
                  <td>Plantae</td>
                  <td>
                      <a className="wrapLogo tinyImgLink" href="/annual-checklist/2017/details/database/id/45">
                          <img
                              src="/annual-checklist/2017/images/databases/Conifer_Database.gif"
                              alt="Conifer Database"
                              title="Conifer Database" /></a>
                  </td>
              </tr>
              <tr className="odd">
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/6a87ffbec80d15005452f6159eec7dd0/synonym/51ffe7c555920c332b9e938c628da071"><i><span  className="matchHighlight">Abies</span>  alba  <span className="marker">var.</span>  acutifolia</i>  Turrill</a>
                  </td>
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/6a87ffbec80d15005452f6159eec7dd0/synonym/51ffe7c555920c332b9e938c628da071">
                          Infraspecific taxon            </a>
                  </td>
                  <td className="field_header_black">synonym for <a href="/annual-checklist/2017/details/species/id/6a87ffbec80d15005452f6159eec7dd0/synonym/51ffe7c555920c332b9e938c628da071"><i>Abies  borisii-regis</i>  Mattf.</a></td>
                  <td>Plantae</td>
                  <td>
                      <a className="wrapLogo tinyImgLink" href="/annual-checklist/2017/details/database/id/45">
                          <img
                              src="/annual-checklist/2017/images/databases/Conifer_Database.gif"
                              alt="Conifer Database"
                              title="Conifer Database" /></a>
                  </td>
              </tr>
              <tr className="even">
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/2eefce687f3561d3546425d6ec108766/synonym/ae564b2c2bec684f95ddd585b4b8c9a5"><i><span  className="matchHighlight">Abies</span>  alba  <span className="marker">var.</span>  cephalonica</i>  (Loudon) Richt.</a>
                  </td>
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/2eefce687f3561d3546425d6ec108766/synonym/ae564b2c2bec684f95ddd585b4b8c9a5">
                          Infraspecific taxon            </a>
                  </td>
                  <td className="field_header_black">synonym for <a href="/annual-checklist/2017/details/species/id/2eefce687f3561d3546425d6ec108766/synonym/ae564b2c2bec684f95ddd585b4b8c9a5"><i>Abies  cephalonica</i>  Loudon</a></td>
                  <td>Plantae</td>
                  <td>
                      <a className="wrapLogo tinyImgLink" href="/annual-checklist/2017/details/database/id/45">
                          <img
                              src="/annual-checklist/2017/images/databases/Conifer_Database.gif"
                              alt="Conifer Database"
                              title="Conifer Database" /></a>
                  </td>
              </tr>
              <tr className="odd">
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/94d2b0fa5ac9a92513bdeccbe6ff9281/synonym/d49b32ef9a81ec8a160813074d4e3741"><i><span  className="matchHighlight">Abies</span>  alba  <span className="marker">var.</span>  nebrodensis</i>  (Lojac.) Svoboda</a>
                  </td>
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/94d2b0fa5ac9a92513bdeccbe6ff9281/synonym/d49b32ef9a81ec8a160813074d4e3741">
                          Infraspecific taxon            </a>
                  </td>
                  <td className="field_header_black">synonym for <a href="/annual-checklist/2017/details/species/id/94d2b0fa5ac9a92513bdeccbe6ff9281/synonym/d49b32ef9a81ec8a160813074d4e3741"><i>Abies  nebrodensis</i>  (Lojac.) Mattei</a></td>
                  <td>Plantae</td>
                  <td>
                      <a className="wrapLogo tinyImgLink" href="/annual-checklist/2017/details/database/id/45">
                          <img
                              src="/annual-checklist/2017/images/databases/Conifer_Database.gif"
                              alt="Conifer Database"
                              title="Conifer Database" /></a>
                  </td>
              </tr>
              <tr className="even">
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/12dca9c49741815f82400bb7bff50553/synonym/c7fa032c35b10400dfd4ac72c5de62d4"><i><span  className="matchHighlight">Abies</span>  alba  <span className="marker">var.</span>  pardei</i>  (Gaussen) Silba</a>
                  </td>
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/12dca9c49741815f82400bb7bff50553/synonym/c7fa032c35b10400dfd4ac72c5de62d4">
                          Infraspecific taxon            </a>
                  </td>
                  <td className="field_header_black">synonym for <a href="/annual-checklist/2017/details/species/id/12dca9c49741815f82400bb7bff50553/synonym/c7fa032c35b10400dfd4ac72c5de62d4"><i>Abies  alba</i>  Mill.</a></td>
                  <td>Plantae</td>
                  <td>
                      <a className="wrapLogo tinyImgLink" href="/annual-checklist/2017/details/database/id/45">
                          <img
                              src="/annual-checklist/2017/images/databases/Conifer_Database.gif"
                              alt="Conifer Database"
                              title="Conifer Database" /></a>
                  </td>
              </tr>
              <tr className="odd">
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/12dca9c49741815f82400bb7bff50553/synonym/e6462f8a18b7118b04144b8881b62509"><i><span  className="matchHighlight">Abies</span>  alba  <span className="marker">var.</span>  podolica</i>  R.I. Schröd.</a>
                  </td>
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/12dca9c49741815f82400bb7bff50553/synonym/e6462f8a18b7118b04144b8881b62509">
                          Infraspecific taxon            </a>
                  </td>
                  <td className="field_header_black">synonym for <a href="/annual-checklist/2017/details/species/id/12dca9c49741815f82400bb7bff50553/synonym/e6462f8a18b7118b04144b8881b62509"><i>Abies  alba</i>  Mill.</a></td>
                  <td>Plantae</td>
                  <td>
                      <a className="wrapLogo tinyImgLink" href="/annual-checklist/2017/details/database/id/45">
                          <img
                              src="/annual-checklist/2017/images/databases/Conifer_Database.gif"
                              alt="Conifer Database"
                              title="Conifer Database" /></a>
                  </td>
              </tr>
              <tr className="even">
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/f726463db2d3fa21cdf9d67d2e09c549/synonym/0282f1d18c8de65ad8fd879635870530"><i><span className="matchHighlight">Abies</span> albertiana</i>  A. Murray bis</a>
                  </td>
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/f726463db2d3fa21cdf9d67d2e09c549/synonym/0282f1d18c8de65ad8fd879635870530">
                          Species            </a>
                  </td>
                  <td className="field_header_black">synonym for <a href="/annual-checklist/2017/details/species/id/f726463db2d3fa21cdf9d67d2e09c549/synonym/0282f1d18c8de65ad8fd879635870530"><i>Tsuga heterophylla</i>  (Raf.) Sarg.</a></td>
                  <td>Plantae</td>
                  <td>
                      <a className="wrapLogo tinyImgLink" href="/annual-checklist/2017/details/database/id/45">
                          <img
                              src="/annual-checklist/2017/images/databases/Conifer_Database.gif"
                              alt="Conifer Database"
                              title="Conifer Database" /></a>
                  </td>
              </tr>
              <tr className="odd">
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/5986cd410434c4fed61aefab7c7c5e2c/synonym/f024ea036bea01dae9325aa577db4b14"><i><span className="matchHighlight">Abies</span> alcoquiana</i>  Veitch ex Lindl.</a>
                  </td>
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/5986cd410434c4fed61aefab7c7c5e2c/synonym/f024ea036bea01dae9325aa577db4b14">
                          Species            </a>
                  </td>
                  <td className="field_header_black">synonym for <a href="/annual-checklist/2017/details/species/id/5986cd410434c4fed61aefab7c7c5e2c/synonym/f024ea036bea01dae9325aa577db4b14"><i>Picea alcoquiana var. alcoquiana</i></a></td>
                  <td>Plantae</td>
                  <td>
                      <a className="wrapLogo tinyImgLink" href="/annual-checklist/2017/details/database/id/45">
                          <img
                              src="/annual-checklist/2017/images/databases/Conifer_Database.gif"
                              alt="Conifer Database"
                              title="Conifer Database" /></a>
                  </td>
              </tr>
              <tr className="even">
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/c526234e655cec65618f58161d24932a/synonym/b1029cb6b79338209e3d60f5974d33fd"><i><span className="matchHighlight">Abies</span> alpestris</i>  Brügger</a>
                  </td>
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/c526234e655cec65618f58161d24932a/synonym/b1029cb6b79338209e3d60f5974d33fd">
                          Species            </a>
                  </td>
                  <td className="field_header_black">synonym for <a href="/annual-checklist/2017/details/species/id/c526234e655cec65618f58161d24932a/synonym/b1029cb6b79338209e3d60f5974d33fd"><i>Picea abies var. abies</i></a></td>
                  <td>Plantae</td>
                  <td>
                      <a className="wrapLogo tinyImgLink" href="/annual-checklist/2017/details/database/id/45">
                          <img
                              src="/annual-checklist/2017/images/databases/Conifer_Database.gif"
                              alt="Conifer Database"
                              title="Conifer Database" /></a>
                  </td>
              </tr>
              <tr className="odd">
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/0126daf55af7564e3117054153d2ebc8"><i><span className="matchHighlight">Abies</span> amabilis</i>  Douglas ex J. Forbes</a>
                  </td>
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/0126daf55af7564e3117054153d2ebc8">
                          Species            </a>
                  </td>
                  <td className="field_header_black">accepted name</td>
                  <td>Plantae</td>
                  <td>
                      <a className="wrapLogo tinyImgLink" href="/annual-checklist/2017/details/database/id/45">
                          <img
                              src="/annual-checklist/2017/images/databases/Conifer_Database.gif"
                              alt="Conifer Database"
                              title="Conifer Database" /></a>
                  </td>
              </tr>
              <tr className="even">
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/3be9eea216a4dfd7ee8ec40986f890d9/synonym/0a4e689ba409e11df5d3e784770b267e"><i><span className="matchHighlight">Abies</span> americana</i>  K. Koch</a>
                  </td>
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/3be9eea216a4dfd7ee8ec40986f890d9/synonym/0a4e689ba409e11df5d3e784770b267e">
                          Species            </a>
                  </td>
                  <td className="field_header_black">synonym for <a href="/annual-checklist/2017/details/species/id/3be9eea216a4dfd7ee8ec40986f890d9/synonym/0a4e689ba409e11df5d3e784770b267e"><i>Picea rubens</i>  Sarg.</a></td>
                  <td>Plantae</td>
                  <td>
                      <a className="wrapLogo tinyImgLink" href="/annual-checklist/2017/details/database/id/45">
                          <img
                              src="/annual-checklist/2017/images/databases/Conifer_Database.gif"
                              alt="Conifer Database"
                              title="Conifer Database" /></a>
                  </td>
              </tr>
              <tr className="odd">
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/e2377269ee61db23c084a697c1e3cff7/synonym/11fbf8308e907d31a8e98d80aaaa2727"><i><span className="matchHighlight">Abies</span> americana</i>  Mill.</a>
                  </td>
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/e2377269ee61db23c084a697c1e3cff7/synonym/11fbf8308e907d31a8e98d80aaaa2727">
                          Species            </a>
                  </td>
                  <td className="field_header_black">synonym for <a href="/annual-checklist/2017/details/species/id/e2377269ee61db23c084a697c1e3cff7/synonym/11fbf8308e907d31a8e98d80aaaa2727"><i>Tsuga canadensis</i>  (L.) Carrière</a></td>
                  <td>Plantae</td>
                  <td>
                      <a className="wrapLogo tinyImgLink" href="/annual-checklist/2017/details/database/id/45">
                          <img
                              src="/annual-checklist/2017/images/databases/Conifer_Database.gif"
                              alt="Conifer Database"
                              title="Conifer Database" /></a>
                  </td>
              </tr>
              <tr className="even">
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/e9a1a62e8315bbfb3a5a42222c4e048c/synonym/9ddc5f1a1190cd672107bf0cd5276242"><i><span className="matchHighlight">Abies</span> americana</i>  Prov.</a>
                  </td>
                  <td className="field_header_black">
                      <a href="/annual-checklist/2017/details/species/id/e9a1a62e8315bbfb3a5a42222c4e048c/synonym/9ddc5f1a1190cd672107bf0cd5276242">
                          Species            </a>
                  </td>
                  <td className="field_header_black">synonym for <a href="/annual-checklist/2017/details/species/id/e9a1a62e8315bbfb3a5a42222c4e048c/synonym/9ddc5f1a1190cd672107bf0cd5276242"><i>Abies fraseri</i>  (Pursh) Poir.</a></td>
                  <td>Plantae</td>
                  <td>
                      <a className="wrapLogo tinyImgLink" href="/annual-checklist/2017/details/database/id/45">
                          <img
                              src="/annual-checklist/2017/images/databases/Conifer_Database.gif"
                              alt="Conifer Database"
                              title="Conifer Database" /></a>
                  </td>
              </tr>
          </table><div className="paginationControl">
          <!-- Previous page link -->

          <!-- Show first page if not present -->

          <!-- Numbered page links -->
          <span className="page-current">1</span> |
          <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/2/sort//direction/asc">
              2    </a> |
          <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/3/sort//direction/asc">
              3    </a> |
          <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/4/sort//direction/asc">
              4    </a> |
          <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/5/sort//direction/asc">
              5    </a> |
          <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/6/sort//direction/asc">
              6    </a> |
          <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/7/sort//direction/asc">
              7    </a> |
          <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/8/sort//direction/asc">
              8    </a> |
          <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/9/sort//direction/asc">
              9    </a> |
          <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/10/sort//direction/asc">
              10    </a> |

          <!-- Show lastpage if not present -->
          ... |
          <a href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/25/sort//direction/asc">
              25    </a> |

          <!-- Next page link -->
          <a className="page-slider" href="/annual-checklist/2017/search/all/key/Abies/fossil/1/match/1/page/2/sort//direction/asc">
              Next &gt;&gt;
          </a>
      </div>
          <div className="page_links">
              <a href="/annual-checklist/2017/search/export">
                  Export search results</a> |
              <a href="/annual-checklist/2017/search/all">
                  New search</a>
          </div>                    </div>
    );
};

export default Results;
