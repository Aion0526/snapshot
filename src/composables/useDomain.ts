import domains from '@/../snapshot-spaces/spaces/domains.json';
import aliases from '@/../snapshot-spaces/spaces/aliases.json';

export function useDomain() {
  const domainName = window.location.hostname;
  const env = 'master';
  // if (domainName.includes('localhost')) env = 'local';
  // if (domainName === 'demo.snapshot.org') env = 'develop';

  // const domain = undefined;
  const domain = 'ardmoneydao.eth';

  const alias = Object.keys(aliases).find(alias => aliases[alias] === domain);

  return { domain, alias, env };
}
