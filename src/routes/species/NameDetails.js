import React from 'react';
import PropTypes from 'prop-types';
import NameHeader from './NameHeader';
import Discussion from './Discussion';


const NameDetails = (props) => {
    return (
    <div>
        <NameHeader {...props.name}/>

        <div id="lastmodified" className="stripe-comment">last modified 10 days ago</div>

        <div id="content" className="container">
          <div className="col-md-9">
            <div id="nomenclature">
              <dl className="dl-horizontal">
                <dt>Identifier</dt>
                <dd><a href="http://dx.doi.org/10.1594/PANGAEA.726855">sciname:{props.name.key}</a></dd>

                <dt>Status</dt>
                <dd>nom. illeg.</dd>

                <dt>Publication</dt>
                <dd><a href="/author/10">Brayshaw</a> in <a href="/reference/3456">Bulletin of the Torrey Botanical Club 31(3): 1904.</a> p. 166</dd>

                <dt>Original Name</dt>
                <dd><a href="/name/1234">Betula fallax Fassett</a></dd>

                <dt>Type Material</dt>
                <dd>IT: Biltmore Herbarium 1619; 21 September 1897; USA. North Carolina. Upper slopes of Mt. Pisgah. (NCU) </dd>
                <dd>type species 2</dd>

                <dt>Original Classification</dt>
                <dd>Plantae - Betulaceae - Betula</dd>

                <dt>Homotypic Synonyms</dt>
                <dd>
                  <ul className="list-unstyled">
                    <li><a href="/name/1234">Betula alleghaniensis var. fallax (Fassett) Brayshaw</a></li>
                    <li><a href="/name/1234">Betula fallax Fasset</a></li>
                    <li><a href="/name/1234">Primula fallax (Fasset) F. Michx.</a></li>
                    <li><a href="/name/1234">Betula lutea f. fallax (Fassett)</a></li>
                  </ul>
                </dd>

              </dl>
            </div>
            <Discussion discussion={props.discussion} about={"/name/" + props.name.key}/>
          </div>

          <div className="col-md-3 sidebar">
            <h4>Sources</h4>
            <ul className="list-unstyled">
              <li>IPNI / Zoobank / IF</li>
              <li>GBIF</li>
            </ul>

            <h4>History</h4>
            <ul className="list-unstyled history">
              <li>2004-12-21 - created by <a href="#">IPNI Bot</a></li>
              <li>2012-02-08 - checked by <a href="#">Gerold Parolly</a></li>
              <li>2013-07-18 - upd. types by <a href="#">Geoffrey Read</a></li>
            </ul>
          </div>
        </div>

    </div>
   )
}

NameDetails.propTypes = {
  name: PropTypes.object.isRequired,
  discussion: PropTypes.array.isRequired
};

export default NameDetails;
