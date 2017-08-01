import React from 'react';
import {Link} from 'react-router-dom';

const All = () => {
  return (
      <div id="content" className="view centered-box">
          <h1 className="page_header">Search <span className="red">Annual Checklist</span> - fixed edition of each year</h1>
          <div id="form-box">
              <div className="form-container">
                  <form id="clear_form" name="clear_form" action="/search/all" method="get">
                      <input type="hidden" name="reset" value="1" />
                  </form>
                  <form dojoattachpoint="containerNode" dojoattachevent="onreset:_onReset,onsubmit:_onSubmit" action="/annual-checklist/2017/search/all" method="post" enctype="application/x-www-form-urlencoded" id="searchForm" widgetid="searchForm">
                      <div className="search-form">
                          <dt id="keyGroup-label">&nbsp;</dt>
                          <dd id="keyGroup-element">
                              <fieldset id="fieldset-keyGroup">
                                  <dl>
                                    <dt id="key-label"><label for="key" className="optional">Search for:</label></dt>
                                    <dd>
                                      <input className="dijit dijitReset dijitLeft dijitTextBox" dojoattachpoint="textbox,focusNode" dojoattachevent="onmouseenter:_onMouse,onmouseleave:_onMouse" autocomplete="off" type="text" name="key" id="key" tabindex="0" widgetid="key" value="abies" />
                                    </dd>
                                  </dl>
                              </fieldset>
                          </dd>
                          <dt id="fossilGroup-label">&nbsp;</dt>
                          <dd id="fossilGroup-element">
                              <fieldset id="fieldset-fossilGroup">
                                  <dl>
                                    <dd>
                                        <input name="fossil" value="0" type="hidden"/>
                                        <div className="dijitReset dijitInline dijitCheckBox" wairole="presentation" role="presentation" widgetid="fossil">
                                            <input name="fossil" type="checkbox" className="dijitReset dijitCheckBoxInput" dojoattachpoint="focusNode" dojoattachevent="onmouseover:_onMouse,onmouseout:_onMouse,onclick:_onClick" value="1" id="fossil" tabindex="0" />
                                        </div>
                                    </dd>
                                    <dt id="fossil-label">
                                        <label for="fossil" className="optional">Show extinct taxa (†)</label>
                                    </dt>
                                  </dl>
                              </fieldset>
                          </dd>
                          <dt id="matchGroup-label">&nbsp;</dt>
                          <dd id="matchGroup-element">
                              <fieldset id="fieldset-matchGroup">
                                  <dl>
                                    <dd>
                                        <input name="match" value="0" type="hidden"/>
                                        <div className="dijitReset dijitInline dijitCheckBox dijitCheckBoxChecked dijitChecked" wairole="presentation" role="presentation" widgetid="match">
                                            <input name="match" type="checkbox" checked="" className="dijitReset dijitCheckBoxInput" dojoattachpoint="focusNode" dojoattachevent="onmouseover:_onMouse,onmouseout:_onMouse,onclick:_onClick" value="1" id="match" tabindex="0" aria-pressed="true"/>
                                        </div>
                                    </dd>
                                    <dt id="match-label">
                                        <label for="match" className="optional">Match whole words only</label>
                                    </dt>
                                  </dl>
                              </fieldset>
                          </dd>
                          <dt id="submitGroup-label">&nbsp;</dt>
                          <dd id="submitGroup-element">
                              <fieldset id="fieldset-submitGroup">
                                  <dl>
                                    <dt id="search-label">&nbsp;</dt>
                                    <dd id="search-element">
                                        <span className="dijit dijitReset dijitLeft dijitInline dijitButton" dojoattachevent="ondijitclick:_onButtonClick,onmouseenter:_onMouse,onmouseleave:_onMouse,onmousedown:_onMouse" widgetid="search">
                                            <span className="dijitReset dijitRight dijitInline">
                                                <span className="dijitReset dijitInline dijitButtonNode">
                                                    <button className="dijitReset dijitStretch dijitButtonContents" dojoattachpoint="titleNode,focusNode" name="search" type="submit" value="Search" wairole="button" waistate="labelledby-search_label" role="button" aria-labelledby="search_label" id="search" tabindex="0" >
                                                        <span className="dijitReset dijitInline" dojoattachpoint="iconNode">
                                                            <span className="dijitReset dijitToggleButtonIconChar">&nbsp;</span>
                                                        </span>
                                                        <span className="dijitReset dijitInline dijitButtonText" id="search_label" dojoattachpoint="containerNode">Search</span>
                                                    </button>
                                                </span>
                                            </span>
                                        </span>
                                    </dd>
                                  </dl>
                              </fieldset>
                          </dd>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    );
};

export default All;
